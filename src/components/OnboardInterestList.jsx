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
        setNewSignedUpUser({...newSignedUpUser, interests: selectedInterests});
    },[selectedInterests]);
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

        <StyledForm>
        {/* set up a form to handle post requests. needs to match the selected array data.*/}
            {interestsArray.map( (interests, index) => {
                    if(selectedInterests.includes(interests.interestName)) {
                        return  <HiddenCheckboxInputs key={index} type="checkbox" value={interests.interestName} checked={true} />
                    } else if(interests.interestName !== selectedInterests[index]) {
                        return  <HiddenCheckboxInputs key={index} type="checkbox" value={interests.interestName} />
                    } 
            })}
            <StyledButton style={{ backgroundColor: '#0077ff', color: '#fff', height: '5rem'}}>Next</StyledButton>
        </StyledForm>
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
    justify-content: space-between;
`;

const StyledForm = S.form`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
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
const HiddenCheckboxInputs = S.input`
    visibility: hidden;
`;