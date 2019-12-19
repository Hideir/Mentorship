import React,{useContext} from "react";
import S from "styled-components";
import AppContext from '../context';
import SearchForm from './Form';
import BGImg from './homepage_background.svg';


const HeroSection = () => {
    const darkMode = useContext(AppContext);
  return (
    <HeroSectionWrapper primary={darkMode}>
        <ContentContainer primary={darkMode} >
            <TextContentContainer>
                <StyledTitle primary={darkMode}> Friendlier </StyledTitle>
                <StyledText primary={darkMode} >Search for individuals who have similar interests as you.</StyledText>
            </TextContentContainer>
            <SearchForm />
        </ContentContainer>
    </HeroSectionWrapper>
  );
};
export default HeroSection;

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
    background-color:  ${props => props.primary ? '#000' : '#fff'};
    box-shadow: 0px 3px 8px #000000;
    width: 60%;
    border-radius: 50px;
`;
const TextContentContainer = S.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto 0 auto;
    width: 80%;
`;
const StyledTitle = S.h2`
    font-size: 4rem;
    color:  ${props => props.primary ? '#fff' : '#000'};
    text-align: left;
`;
const StyledText = S.p`
    font-size: 1.8rem;
    text-align: left;
    margin-bottom: 40px;
    color:  ${props => props.primary ? '#fff' : '#000'};
`;