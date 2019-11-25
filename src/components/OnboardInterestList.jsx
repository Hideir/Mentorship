import React,{useState, useEffect} from 'react'
import axios from 'axios';
import S from 'styled-components';
import InterestCard from './InterestCard';
import {interestsArray} from './interestData';

const OnboardInterestList = () => {
    let cardCounter = 1;
    const [selectedInterests, setSelectedInterests] = useState([]);
    return(
        <GridContainer>
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


