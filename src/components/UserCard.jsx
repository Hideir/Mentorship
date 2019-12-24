import React from 'react';
import S from 'styled-components'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const UserCard = (props) => {
    return(
        <CardContainer>
        <ContentContainer>
            <ProfileImage></ProfileImage>
                <ProfileContentContainer>
                    <StyledLink>{props.user.firstName.charAt(0).toUpperCase() + props.user.firstName.substring(1)} {props.user.LastName}</StyledLink>
                    <StyledText primary={true}>{props.user.tagLine}</StyledText>
                    <StyledText primary={false}>{props.user.state} {props.user.city}</StyledText>
                </ProfileContentContainer>
        </ContentContainer>
        <StyledLink  to="/"><FontAwesomeIcon icon={faEnvelope}/></StyledLink> 
            <InterestsUl>
                {props.user.interests.map( (interest,index) => <InterestsTags key={index}>{interest}</InterestsTags>)}
            </InterestsUl>
        </CardContainer>
    );
}

export default UserCard;

const CardContainer = S.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: 20px;
    padding: 20px;
    justify-content: space-between;
    border-bottom: 1px solid #b7b7b7;
`;
const ContentContainer = S.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;
const ProfileContentContainer = S.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;
const StyledLink = S(Link)`
    font-size: 2.6rem;
    color: #0077ff;
    text-align: left;
    text-decoration: none;
    width: fit-content;
    &:hover {
        cursor: pointer;
        color: #000;
    }
`;
const StyledText = S.p`
    font-size: ${props => props.primary ? '2.2rem' : '2rem'};
    color: #000;
    width: 100%;
    margin-bottom: 5px;
    text-align: left;
`;
const InterestsUl = S.ul`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: flex-end;
    margin-top: 25px;
`;
const InterestsTags = S.li`
    width: auto;
    list-style: none;
    font-size: 1.6rem;
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #0077ff;
    color: #fff;
    margin-top: 10px;
`;
const ProfileImage = S.div`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: #d3d3d3;
`;