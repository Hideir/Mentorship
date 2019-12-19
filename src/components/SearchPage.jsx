import React,{useContext} from 'react';
import SearchForm from './Form';
import S from 'styled-components';
import {interestsArray} from './OnboardingProcesses/interestData';
import BGImg from './homepage_background.svg';



const SearchPage = () => {
    return(
        <HeroSectionWrapper >
        <ContentContainer >
            <TextContentContainer>
            <StyledTitle >Search</StyledTitle>
            </TextContentContainer>
            <SearchForm />
            <SelectedInterestUl>
                    {interestsArray.map( (interests, index) => {
                        if(index <= 6){
                            return <SelectedInterestTags >{interests.interestName}</SelectedInterestTags>
                        }
                    })}

            </SelectedInterestUl>
        </ContentContainer>
    </HeroSectionWrapper>
    );
}

export default SearchPage;

const HeroSectionWrapper = S.section`
  background-color: ${props => props.primary ? '#000' : '#fff'};
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background-repeat: no-repeat;
  background-image: url(${BGImg});
  height: 100vh;
  background-position: center;
  background-size: cover;

`;
const ContentContainer = S.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 200px 0;
    background-color: ${props => props.primary ? '#000' : '#fff'};
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
    color: ${props => props.primary ? '#fff' : '#000'};
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
    background-color: ${props => props.primary ? '#fff' : '#2f2c2c'};
    color: ${props => props.primary ? '#000' : '#fff'};;
    width: auto;
    padding: 10px 20px;
    margin: 0 10px 10px 0;
    border-radius: 1rem;
`;