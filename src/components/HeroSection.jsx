import React from 'react';
import {useSelector} from 'react-redux';
import HomeIllustraction from './undraw_partying.svg'
import {Link} from 'react-router-dom';
import S from 'styled-components';


const HeroSection = () => {

    const isLoggedIn = useSelector( state => state.root.isLoggedIn); // Grab logged In State
    const loggedInUser = useSelector( state => state.root.loggedInUser); // Grab logged in user

  return (
    <HeroSectionWrapper>
        <ContentContainer>
            <TextContainer>
                <Triangle></Triangle>
                <Title>Hi<StyledSpan>deir</StyledSpan>!</Title>
                <StyledText>New to the area, looking to network, or just looking to grow your inner circle? Connect
                with like minded individuals on Hideir.</StyledText>
                <StyledLinkContainer>
                            {isLoggedIn ? <StyledLink to="/search">Connect</StyledLink> : <StyledLink to="/signup">Get Started</StyledLink>}
                </StyledLinkContainer>
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
const Triangle = S.div`
    width: 0;
    height: 0;
    border-top: 200px solid transparent;
    border-bottom: 200px solid transparent;
    position: absolute;
    border-left: 800px solid #d0cde1;
    transform: rotate(-25deg);
`;
const TextContainer = S.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
    justify-content: center;

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
    font-size: 15rem;
    color: #000;
    text-align: left;
    font-weight: 900;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
    z-index: 1;
    @media only screen and (max-width: 1200px) { 
        font-size: 4rem;
    }
    @media only screen and (max-width: 860px) {
        text-align: center;
	  }
`; 
const StyledSpan = S.span`
    color: #0077ff;
`;
const StyledText = S.p`
    font-size: 3rem;
    text-align: left;
    margin: 40px 0;
    width: 100%;
    color: #0077ff;
    font-weight: 600;
    z-index: 1;
    @media only screen and (max-width: 1200px) { 
        font-size: 2rem;
    }
    @media only screen and (max-width: 860px) {
        color: #fff;
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
const StyledLinkContainer = S.div`
      width: 100%;
      justify-content: flex-start;
      display: flex;
      align-items: center;
      z-index: 1;
`;
const StyledLink = S(Link)`
    font-size: 2.2rem;
    background-color: #0077ff;
    color: #fff;
    font-weight: 500;
    text-align: left;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 30px;
    &:hover {
        cursor: pointer;
        background-color: #003c80;
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

