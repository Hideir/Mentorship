import React from 'react';
import S from 'styled-components'

const UserCard = (props) => {
    console.log(props);
    return(
        <CardContainer>
            <StyledText>{props.user.firstName} {props.user.LastName}</StyledText>
            <StyledText>{props.user.tagLine}</StyledText>
            <StyledText>{props.user.state} {props.user.city}</StyledText>
        </CardContainer>
    );
}

export default UserCard;

const CardContainer = S.div`
    background-color: #d3d3d3;
    display: flex;
    flex-flow: row wrap;
    margin-top: 20px;
`;

const StyledText = S.p`
    font-size: 18px;
    color: #000;
    width: 100%;
`;