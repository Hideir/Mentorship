import React from 'react';
import HomeIllustraction from './undraw_partying.svg'
import S from 'styled-components';


const HomePage = () => {
    return(
        <Section>
            <TitleContainer>
                <Title>Welcome to Hideir</Title>
                <Title>A place to grow your inner friendship circle.</Title>
            </TitleContainer>
            <StyledImg src={HomeIllustraction} />
        </Section>
    );

}
export default HomePage;

const Section = S.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    height: 90vh;
    @media only screen and (max-width: 860px) {
        margin-bottom: 50px;
        margin-top: 0;
	  }
`;
const TitleContainer = S.div`
    display: flex;
    flex-direction: column;
    margin: 150px 0;
    width: 50%;

    @media only screen and (max-width: 860px) {
        width: 100%;
        margin: 0;
        justify-content: center;
	  }
`;
const Title = S.h1`
    font-size: 5rem;
    color: #000;
    text-align: left;

    @media only screen and (max-width: 860px) {
        font-size: 3rem;
        text-align: center;
	  }
`; 
const StyledImg = S.img`
    width: 35%;
    @media only screen and (max-width: 860px) {
		width: 100%;
	  }
`;