import React, { useState, useContext, useEffect } from "react";
import SearchForm from "./Form";
import S from "styled-components";
import { interestsArray } from "./OnboardingProcesses/interestData";
import axios from "axios";
import UserCard from "./UserCard";

const SearchPage = () => {
  let token = localStorage.getItem("auth-token");
  const [searchInput, setSearchInput] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState( () => {
    if(matchedUsers.length <= 0) {
      return 0;
    }
  });
  useEffect(() => {
    axios
      .post(
        `/search`,
        { params: { test: "randomData" } },
        {
          headers: {
            "content-type": "application/json", // Tell the server we are sending this over as JSON
            authorization: token // Send the token in the header from the client.
          }
        }
      )
      .then(response => {
        // When our server responds that we made a good request we push our user to the home component.
        console.log(response);
      })
      .catch(error => {
        console.log("here is the error" + error);
      });

  }, []);

  const handleSearch = event => {
    event.preventDefault();
    axios
      .post(
        `/search`,
        { searchInput },
        {
          headers: {
            "content-type": "application/json", // Tell the server we are sending this over as JSON
            authorization: token // Send the token in the header from the client.
          }
        }
      )
      .then(async response => {
        // When our server responds that we made a good request we push our user to the home component.
        console.log(response.data.matchedRows);
        await setMatchedUsers(response.data.matchedRows);
        await setNumberOfUsers(response.data.matchedRows.length);
      })
      .catch(error => {
        console.log("here is the error" + error);
      });
  };
  const handleChanges = async event => {
    await setSearchInput(event.target.value);
  };
  return (
    <HeroSectionWrapper>
      <ContentContainer>
        <TextContentContainer>
          <StyledTitle>Search</StyledTitle>
        </TextContentContainer>
        <SearchForm handleChanges={handleChanges} handleSearch={handleSearch} />
        <SelectedInterestUl>
          {interestsArray.map((interests, index) => {
            if (index <= 6) {
              return (
                <SelectedInterestTags>
                  {interests.interestName}
                </SelectedInterestTags>
              );
            }
          })}
        </SelectedInterestUl>
        {numberOfUsers !== 0 ? <h2 style={{color: 'blue', fontSize: '26px'}}>Number of users: {numberOfUsers}</h2> : null}
      </ContentContainer>
      {matchedUsers == false ? null : (
        <UserCardsContainer>
          {matchedUsers &&
            matchedUsers.map(user => {
              return <UserCard user={user} />;
            })}
        </UserCardsContainer>
      )}
      {/* {matchedUsers.length ? <UserCardsContainer>
            {matchedUsers && matchedUsers.map( (user) => {
                return <UserCard user={user} />
            })}
        </UserCardsContainer> : null} */}
    </HeroSectionWrapper>
  );
};

export default SearchPage;

const HeroSectionWrapper = S.section`
  background-color: ${props => (props.primary ? "#000" : "#fff")};
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;
const ContentContainer = S.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 200px 0 100px 0;
    background-color: ${props => (props.primary ? "#000" : "#fff")};
    box-shadow: 0px 3px 8px #000000;
    width: 60%;
    border-radius: 20px;
`;
const TextContentContainer = S.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto 0 auto;
    width: 80%;
`;
const StyledTitle = S.h2`
    font-size: 4rem;
    color: ${props => (props.primary ? "#fff" : "#000")};
    text-align: left;
    margin-bottom: 40px;
`;

// Search Labels
const SelectedInterestUl = S.ul`
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    width: 100%;
    flex-flow: row wrap;
    height: auto;
    justify-content: center;
    &::after {
        content: 'nothing';
        font-size: 0;
        height: 55px;
        width: 10px;
        background-color: transparent;
    }
`;
const SelectedInterestTags = S.li`
    font-size: 1.8rem;
    background-color: ${props => (props.primary ? "#fff" : "#2f2c2c")};
    color: ${props => (props.primary ? "#000" : "#fff")};;
    width: auto;
    padding: 10px 20px;
    margin: 0 10px 10px 0;
    border-radius: 1rem;
`;

// Card Container
const UserCardsContainer = S.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    width: 60%; 
    border-radius: 5px;
    margin: 20px auto;
    border: 1px solid #a5a5a5;
    box-shadow: 0px 3px 8px #b7b7b7;
`;
