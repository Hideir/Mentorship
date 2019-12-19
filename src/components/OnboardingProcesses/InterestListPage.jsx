import React,{useContext} from "react";
import S from "styled-components";
import OnboardInterestList from "./OnboardInterestList";
import AppContext from '../../context';

const InterestListPage = ({setNewSignedUpUser, newSignedUpUser}) => {
  const darkMode = useContext(AppContext);
  return (
    <StyledMainSection primary={darkMode}>
      <OnboardingAboutPageContainer>
        <PageTitle primary={darkMode}>Select some things you are interested in.</PageTitle>
        <SubHeading>
          Don't worry, you will be able to change these later.
        </SubHeading>
      </OnboardingAboutPageContainer>
      <OnboardInterestList setNewSignedUpUser={setNewSignedUpUser} newSignedUpUser={newSignedUpUser}/>
    </StyledMainSection>
  );
};
export default InterestListPage;

const StyledMainSection = S.main`
  padding-top: 140px;
  padding-bottom: 40px;
  background-color: ${props => props.primary ? '#000' : '#fff'}
`;
const OnboardingAboutPageContainer = S.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin 40px 0;
`;
const PageTitle = S.h2`
    font-size: 4rem;
    width: 100%;
    color: ${props => props.primary ? '#fff' : '#000'}
`;
const SubHeading = S.p`
    font-size: 2.4rem;
    width: 100%;
    color: #0077ff;
    font-style: italic;
`;
