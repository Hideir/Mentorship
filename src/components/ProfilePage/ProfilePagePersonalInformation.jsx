import React from 'react';
import S from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from 'react-redux';

const ProfilePagePersonalInformation = (props) => {
    const dispatch = useDispatch();
    const messageSessions = useSelector(state => state.messageReducer.userRelations);
    console.log(messageSessions);
    const messageSessionIds = messageSessions.map( users => {
            return users.id;
    })
    const startMessage = (userInformation) => {
        const { id, email, firstName, lastName} = userInformation; // deconstruct the user information
        const usersMessageSessions = { // create a new object so we don't use useless information
            id,
            email,
            firstName,
            lastName
        }

        if(messageSessions.length === 0) { // if array is empty, start one session.
            dispatch({type: 'START_MESSAGE_SESSION', payload: usersMessageSessions});
        } else if(!messageSessionIds.includes(userInformation.id)) { // if there are sessions in the array, check them before we spin up new sessions
            dispatch({type: 'START_MESSAGE_SESSION', payload: usersMessageSessions});
        }
    }

	return(
        <>
            <CardContainer>
                <InformationContainer>
                    <InformationContainer personalInformation="true">
                        <Text primary={true}> {props.firstName}</Text>
                        <Text primary={true}> {props.lastName}</Text>
                    </InformationContainer>
                    <InformationContainer personalInformation="true">
                        <Text>{props.city},</Text>
                        <Text>{props.state}</Text>
                    </InformationContainer>
                    <InformationContainer>
                        <Text>{props.tagLine}</Text>
                    </InformationContainer>
                    <MessageButton  onClick={() => startMessage(props.profileData)} primary="true"><FontAwesomeIcon icon={faEnvelope}/></MessageButton> 
                </InformationContainer>
            </CardContainer>
        </>
	);
}

export default ProfilePagePersonalInformation;

const CardContainer = S.div`
    width: 70%;
    display: flex;
    align-items: flex-end;

    @media only screen and (max-width: 860px) {
        width: 100%;
	  }
`;
const InformationContainer = S.div`
    width: ${props => props.personalInformation ? '55%' : '100%'};
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    
    @media only screen and (max-width: 860px) {
        justify-content: center;
        width: 100%;
        margin-bottom: 0;
	  }
`;
const Text = S.p`
    font-size: ${props => props.primary ? '3rem' : '2rem' };
    padding-left: 10px;
    text-align: left;
    text-transform: capitalize;

    @media only screen and (max-width: 860px) {
        font-size: ${props => props.primary ? '2.2rem' : '1.6rem' };
        padding: 0;
	  }
`;
const MessageButton = S.div`
font-size: 2.6rem;
color: #0077ff;
text-align: left;
text-decoration: none;
width: fit-content;
&:hover {
    cursor: pointer;
    color: #000;
}

@media only screen and (max-width: 860px) {
    display: ${props => props.primary ? 'block' : 'none;'};
    font-size: 2.4rem;
    color: #000;
    font-weight: 600;
  }
`;