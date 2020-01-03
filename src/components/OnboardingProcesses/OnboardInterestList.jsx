import React,{useState, useEffect} from 'react'
import S from 'styled-components';
import InterestCard from './InterestCard';
import {interestsArray} from './interestData';
import {withRouter} from 'react-router-dom';
import MedFormButton from '../ReusedComponents/MedFormButton';


const OnboardInterestList = (props) => {
    let cardCounter = 1;
    const [selectedInterests, setSelectedInterests] = useState([]);

    useEffect( () => {
        // Add interests to the new signed up user object in the app component
        props.setNewSignedUpUser({...props.newSignedUpUser, interests: selectedInterests});
    },[selectedInterests]);

    // Test api call to make sure I can post outside of a form. Which I can!
    const pushUser = () => {
        props.history.push("/signup/add-profile");
    }
    return(
        <CardContainer>
        {/* Create labels for selected interests*/ }
            <SelectedInterestTagsContainer>
                <SelectedInterestUl>
                    {selectedInterests.map( (interests, index) => {
                        return <SelectedInterestTags key={index}>{interests}</SelectedInterestTags>
                    })}
                </SelectedInterestUl>
            </SelectedInterestTagsContainer>
            <SelectedInterestTagsContainer>
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
            </SelectedInterestTagsContainer>
            <MedFormButton  handleClick={pushUser} buttonValue={'Next'}/>
        </CardContainer>
    );
}

export default withRouter(OnboardInterestList);

const  CardContainer = S.section`
    display: flex;
    flex-flow: row wrap;
    width: 62%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 860px) {
        width: 90%;
	  }
`;

const SelectedInterestTagsContainer = S.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media only screen and (max-width: 860px) {
        justify-content: space-around;
	  }
`;
const SelectedInterestUl = S.ul`
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    width: 90%;
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
const SelectedInterestTags = S.li`
    font-size: 1.8rem;
    background-color: #2f2c2c;
    color: #fff;
    width: auto;
    padding: 10px 20px;
    margin: 0 10px 10px 0;
    border-radius: 1rem;
    text-transform: capitalize;

    @media only screen and (max-width: 860px) {
        font-size: 1.4rem;
	  }
`;
const NextButtonContainer = S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    @media only screen and (max-width: 860px) {
        margin-bottom: 100px;
	  }
`;
const NextButton = S.div`
    display: flex;
    text-transform: capitalize;
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
        box-shadow: 0px 0px 5px #232323c7;
        transform: scale(1.1);
    }
    @media only screen and (max-width: 860px) {
        width: 100px;
	  }
`;