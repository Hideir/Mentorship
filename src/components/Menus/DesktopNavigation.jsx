import React from 'react';
import {Link}  from "react-router-dom";
import S from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from '../Logos/Logo';


const DesktopNavigation = (props) => {

    return(
        <StyledHeader>
            <StyledNavigationContainer>
                <Logo />
                <StyledNavigation>
                    <StyledUL>
                        <StyledLi>
                            <StyledLink to="/">Home</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            {props.IsLoggedIn ? <StyledLink to="/profile">Profile</StyledLink> : null }
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="/about">About</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            {props.IsLoggedIn ? <StyledLink onClick={props.signOut} to="/">Log Out</StyledLink> : <StyledLink to="/login">Login</StyledLink>}
                        </StyledLi>
                        <StyledLi>
                            {props.IsLoggedIn ? null : <StyledLink secondary="true" to="signup">Get Started</StyledLink>}
                        </StyledLi>
                        {props.IsLoggedIn 
                            ?<StyledLi>
                                <StyledLink  to="/search"><FontAwesomeIcon icon={faSearch}/></StyledLink> 
                            </StyledLi>
                            : null 
                        }
                    </StyledUL>
                </StyledNavigation>
            </StyledNavigationContainer>
        </StyledHeader>
    );
}

export default DesktopNavigation;

const StyledHeader = S.header`
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: fixed;
    top: 0;
    @media (max-width: 860px) {
        display: none;
      }
`;

const StyledNavigationContainer = S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 62%;
`;
const StyledNavigation = S.nav`
    display: flex;
    align-items: center;
`;

const StyledUL = S.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const StyledLi = S.li`
    list-style: none;
    margin: 0 5px;
    display: flex;
    align-items: center;
`;
const StyledLink = S(Link)`
    display: flex;
    height: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    align-items: center;
    font-size: 1.6rem;
    color: ${props => props.secondary ? '#fff' : '#000'};
    height: 2rem;
    padding: 1rem 2.4rem;
    border-radius: 20px;
    text-decoration: none;
    background-color: ${props => props.secondary ? '#0077ff' : 'transparent'}
    transition: all ease-in-out 120ms;
    :hover {
        background-color: ${props => props.secondary ? '#003c80' : 'rgba(194, 194, 194, 0.4)'}
    }
    :active {
        box-shadow: 0px 2px 5px 0px #464545;
        transform: scale(1.1);
    }
`;
