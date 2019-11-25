import React from 'react';
import S from 'styled-components';
import OnboardInterestList from './components/OnboardInterestList';

const InterestListPage = () => {
    return(
        <StyledMainSection>
            <OnboardInterestList />
        </StyledMainSection>
    );
}
export default InterestListPage;

const StyledMainSection = S.main`
    height: 100vh;
    display: flex;
    align-items: center;
`;