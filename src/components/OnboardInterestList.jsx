import React,{useState, useEffect} from 'react'
import S from 'styled-components';
import InterestCard from './InterestCard';
import {interestsArray} from './interestData';
import {withRouter} from 'react-router-dom';

const OnboardInterestList = (props) => {
    console.log(props);
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
            {/* Loop through all the interests and pass in the interests data into the InterestCard component */}
            <NextButtonContainer >
                <NextButton onClick={pushUser} style={{ backgroundColor: '#0077ff', color: '#fff', height: '3rem'}}>Next</NextButton>
            </NextButtonContainer>
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
`;

const SelectedInterestTagsContainer = S.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
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
const SelectedInterestTags = S.li`
    font-size: 1.8rem;
    background-color: #2f2c2c;
    color: #fff;
    width: auto;
    padding: 10px 20px;
    margin: 0 10px 10px 0;
    border-radius: 1rem;
`;
const NextButtonContainer = S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
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