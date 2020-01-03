import React from 'react';
import HomeIllustraction from './undraw_partying.svg'
import S from 'styled-components';


const HeroSection = () => {
  return (
    <HeroSectionWrapper>
        <ContentContainer>
            <TextContainer>
                <Title>Welcome to Hideir</Title>
                <StyledText>New to the area, looking to network, or just looking to grow your inner circle? Connect
                with like minded individuals on Hideir.</StyledText>
            </TextContainer>
            <StyledImg src={HomeIllustraction} />
        </ContentContainer>
    </HeroSectionWrapper>
  );
};
export default HeroSection;

const HeroSectionWrapper = S.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    @media only screen and (max-width: 860px) {
        margin-bottom: 50px;
        margin-top: 0;
    }
`;
const ContentContainer = S.div`
    display: flex;
    flex-flow: row wrap;
    margin: 0 0 150px 0;
    width: 80%;

    @media only screen and (max-width: 860px) {
        width: 100%;
        margin: 0 0 50px 0;
        justify-content: center;

    }
`;
const TextContainer = S.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;

    &::before {
        background-color: #0077ff;
        content: '';
        width: 100%;
        position: absolute;
        height: 200px;
        top: 62px;
        right: 50px;
        z-index: -1;
    }
    &::after {
        background-color: #c1deffc9;
        content: '';
        width: 100%;
        position: absolute;
        height: 100%;
        left: 100px;
        z-index: -2;
    }
    @media only screen and (max-width: 1200px) {
        &::before {
            height: 150px;
            top: 50px;
            right: 35px;
        }
    }
    @media only screen and (max-width: 860px) {
        width: 100%;
        justify-content: center;
        margin-bottom: 50px;

        &::before {
            top: 38px;
            right: 0;
        }

        &::after {
            left: 0;
        }
	  }
`;
const Title = S.h1`
    font-size: 5rem;
    color: #000;
    text-align: left;

    @media only screen and (max-width: 1200px) { 
        font-size: 4rem;
    }
    @media only screen and (max-width: 860px) {
        font-size: 3rem;
        text-align: center;
	  }
`; 
const StyledText = S.p`
    font-size: 2.6rem;
    text-align: left;
    margin-bottom: 40px;
    width: 80%;
    color: #fff;

    @media only screen and (max-width: 1200px) { 
        font-size: 2rem;
    }
    @media only screen and (max-width: 860px) {
        text-align: center;
        font-size: 1.8rem;
        width: 100%;
	  }
`;
const StyledImg = S.img`
    width: 50%;
    min-width: 300px;
    @media only screen and (max-width: 860px) {
        width: 80%;
        margin: 0 auto;
	  }
`;
