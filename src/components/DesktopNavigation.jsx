import React,{useState} from 'react';
import {Link}  from "react-router-dom";
import S from 'styled-components';


const DesktopNavigation = () => {
    return(
        <StyledHeader>
            <StyledNavigationContainer>
                <StyledNavigation>
                    <StyledUL>
                        <StyledLi>
                            <StyledLink to="/">Home</StyledLink>
                        </StyledLi>
                        {/* <StyledLi>
                            <StyledLink>Software Mentors</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink>Business Mentors</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink>Big Data Mentors</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink>About</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink>Login</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink>Get Started</StyledLink>
                        </StyledLi> */}
                    </StyledUL>
                </StyledNavigation>
            </StyledNavigationContainer>
        </StyledHeader>
    );
}

export default DesktopNavigation;

const StyledHeader = S.header`
    width: 100%;
    background-color: blue;
`;

const StyledNavigationContainer = S.div`
    display: flex;
    flex-direction: row wrap;
    align-items: center;
    justify-content: center;
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
    padding: 0 20px;
    list-style: none;
`;
const StyledLink = S(Link)`
    font-size: 1.8rem;
    color: #fff;
`;
