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
        margin-top: 25px;
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
        box-shadow: 0px 0px 5px #232323c7;
        border-radius: 5px;
    }
    &::after {
        background-color: #c1deffc9;
        content: '';
        width: 100%;
        position: absolute;
        height: 100%;
        left: 100px;
        z-index: -2;
        border-radius: 5px;
    }
    @media only screen and (max-width: 1200px) {
        &::before {
            height: 150px;
            top: 50px;
            right: 35px;
            margin: 0 auto;
        }
    }
    @media only screen and (max-width: 860px) {
        width: 100%;
        justify-content: center;
        margin-bottom: 50px;

        &::before {
            display: none;
        }

        &::after {
            display: none;
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
        font-size: 2.4rem;
        padding: 10px 10px 20px 10px;
        margin-bottom: 0;
        background-color: #0077ff;
        width: 90%;
        text-align: center;
        box-sizing: border-box;
        border-radius: 5px;
        margin: 0 auto;
        box-shadow: 0px 0px 5px #232323c7;
	  }
`;

const ImageContainer = S.div`
      display: flex;
      align-items: center;
`;
const StyledImg = S.img`
    width: 50%;
    min-width: 300px;
    @media only screen and (max-width: 860px) {
        width: 80%;
        margin: 0 auto;
	  }
`;

