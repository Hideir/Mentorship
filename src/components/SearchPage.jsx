import React, { useState, useContext, useEffect } from "react";
import '../App.css';
import SearchForm from "./Form";
import PossibleSearchTags from './PossibleSearchTags';
import S from "styled-components";
import { interestsArray } from "./OnboardingProcesses/interestData";
import axios from "axios";
import UserCard from "./UserCard";

const SearchPage = () => {
  let token = localStorage.getItem("auth-token");
  // State
  const [selectedTags, setSelectedTags] = useState([]);
  
  const [searchInput, setSearchInput] = useState(""); // Users search input
  const [matchedUsers, setMatchedUsers] = useState([]); // Users that match the searched input
  const [numberOfUsers, setNumberOfUsers] = useState( () => { // How many matched users there are.
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
        { selectedTags },
        {
          headers: {
            "content-type": "application/json", // Tell the server we are sending this over as JSON
            authorization: token // Send the token in the header from the client.
          }
        }
      )
      .then(async response => {
        // When our server responds that we made a good request we push our user to the home component.
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
        <SelectedInterestUl>
          {interestsArray.map( (interests, index) =>{
            return  <PossibleSearchTags index={index} selectedTags={selectedTags} setSelectedTags={setSelectedTags} interests={interests}/>

          })}
        </SelectedInterestUl>
        <SearchForm handleChanges={handleChanges} handleSearch={handleSearch} />
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
