import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import '../App.css';
import SearchForm from "./Form";
import PossibleSearchTags from './PossibleSearchTags';
import S from "styled-components";
import { interestsArray } from "./OnboardingProcesses/interestData";
import axios from "axios";
import UserCard from "./UserCard";
import IsLoadingComponent from './StyledComponents/IsLoadingComponent';


const SearchPage = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("auth-token");
  // State
  const selectedTags = useSelector( state => state.searchPage.selectedTags);
  const isLoading = useSelector(state => state.root.isLoading);
  // const [selectedTags, setSelectedTags] = useState([]);
  const [matchedUsers, setMatchedUsers] = useState([]); // Users that match the searched input
  const [numberOfUsers, setNumberOfUsers] = useState( () => { // How many matched users there are.
    if(matchedUsers.length <= 0) {
      return 0;
    }
  });
  
  useEffect(() => {
    axios
      .post(
        `https://hideir.herokuapp.com/search`,
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
      })
      .catch(error => {
        console.log("here is the error" + error);
      });
  }, [token]);

  const handleSearch = event => {
    event.preventDefault();
    dispatch({type: 'SET_ISLOADING', payload: true})
    axios
      .post(
        `https://hideir.herokuapp.com/search`,
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
        // setSelectedTags([]); // Reset value.
        dispatch({type: 'SET_SELECTED_TAGS', payload: []}); // reset the selected tags
        dispatch({type: 'REMOVE_ISLOADING', payload: false})
      })
      .catch(error => {
        dispatch({type: 'REMOVE_ISLOADING', payload: false})
        console.log("here is the error" + error);
      });

  };
  return (
    <>
    {isLoading ? <IsLoadingComponent /> : null}
    <HeroSectionWrapper>
      <ContentContainer>
        <TextContentContainer>
          <StyledTitle>Search</StyledTitle>
        </TextContentContainer>
        <SelectedInterestUl>
          {interestsArray.map( (interests, index) =>{
            return <PossibleSearchTags 
              matchedUsers={matchedUsers} 
              key={index} 
              selectedTags={selectedTags} 
              interests={interests}
            />
          })}
        </SelectedInterestUl>
        <SearchForm handleSearch={handleSearch} />
        {numberOfUsers !== 0 ? <StyledText> {numberOfUsers} Results</StyledText> : null}
      </ContentContainer>
      {matchedUsers.length < 1 ? null : (
        <UserCardsContainer>
          {matchedUsers &&
            matchedUsers.map((user,index) => {
              return <UserCard key={index} user={user} />;
            })}
        </UserCardsContainer>
      )}
    </HeroSectionWrapper>
    </>
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
const StyledText = S.p`
  font-size: 2.4rem;
  color: #000;
`;
const ContentContainer = S.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 100px 0;
    background-color: ${props => (props.primary ? "#000" : "#fff")};
    box-shadow: 0px 0px 5px #232323c7;
    width: 60%;
    border-radius: 20px;
    box-sizing: border-box;

    @media only screen and (max-width: 860px) {
      width: 100%;
      margin-top: 0;
      border-radius: unset;
    }
`;
const TextContentContainer = S.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto 0 auto;
    width: 80%;
    @media only screen and (max-width: 860px) {
      width: 100%;
    }
`;
const StyledTitle = S.h2`
    font-size: 4rem;
    color: ${props => (props.primary ? "#fff" : "#000")};
    text-align: left;
    margin-bottom: 40px;

    @media only screen and (max-width: 860px) {
      
    }
`;
const SelectedInterestUl = S.ul`
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    width: 100%;
    flex-flow: row wrap;
    height: auto;
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
    box-shadow: 0px 0px 5px #232323c7;

    @media only screen and (max-width: 860px) {
      width: 100%;
      border-right: 0;
      border-left: 0;
    }
`;
