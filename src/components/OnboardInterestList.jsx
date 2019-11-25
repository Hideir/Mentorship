import React,{useState, useEffect} from 'react'
import axios from 'axios';
import S from 'styled-components';
import InterestCard from './InterestCard';
import {interestsArray} from './interestData';
import {StyledButton} from './StyledComponents/FormStyledComponents';


const OnboardInterestList = ({setNewSignedUpUser, newSignedUpUser}) => {
    let cardCounter = 1;
    const [selectedInterests, setSelectedInterests] = useState([]);

    useEffect( () => {
        // Add interests to the new signedup user object in the app component
        setNewSignedUpUser({...newSignedUpUser, interests: selectedInterests});
    },[selectedInterests]);

    // Test api call to make sure I can post outside of a form. Whcih I can!
    const fakePostCall = () => {
        axios.post("https://reqres.in/api/users/", {selectedInterests})
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    return(
        <GridContainer>
            <SelectedInterestTagsContainer>
            <SelectedInterestUl>
                {selectedInterests.map( (interests, index) => {
                    return <SelectedInterestTags key={index}>{interests}</SelectedInterestTags>
                })}
            </SelectedInterestUl>

            </SelectedInterestTagsContainer>

            {interestsArray.map( (interests, index) => {
                return(
                    <InterestCard
                        selectedInterests={selectedInterests}
                        setSelectedInterests={setSelectedInterests}
                        interestCardCounter={cardCounter++}
                        key={index}
                        interests={interests}
                    />
                );
            })}

            <NextButtonContainer onClick={fakePostCall}>
                <NextButton style={{ backgroundColor: '#0077ff', color: '#fff', height: '3rem'}}>Next</NextButton>
            </NextButtonContainer>
        </GridContainer>
    );
}

export default OnboardInterestList;

const  GridContainer = S.section`
    display: flex;
    flex-flow: row wrap;
    width: 62%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;

const SelectedInterestTagsContainer = S.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
const SelectedInterestUl = S.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    height: 5rem;
`;
const SelectedInterestTags = S.li`
    font-size: 1.8rem;
    background-color: #c3c3c3;
    color: #000;
    width: auto;
    padding: 10px;
    margin-right: 10px;
    border-radius: 2rem;
`;
const NextButtonContainer = S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
const NextButton = S.div`
        display: flex;
        text-transform: uppercase;
        font-weight: 600;
        align-items: center;
        font-size: 2rem;
        color: ${props => (props.secondary ? "#fff" : "#000")};
        padding: 1rem 2.4rem;
        border-radius: 20px;
        text-decoration: none;
        background-color: ${props => (props.secondary ? "#0077ff" : "transparent")}
        transition: all ease-in-out 120ms;
        height: 4rem;
        width: 200px;
        border: none;
        align-items: center;
        justify-content: center;
        :hover {
        background-color: ${props =>props.secondary ? "#003c80" : "rgba(194, 194, 194, 0.4)"};
        cursor: pointer;
        }
        :active {
        box-shadow: 0px 2px 5px 0px #464545;
        transform: scale(1.1);
        }`;