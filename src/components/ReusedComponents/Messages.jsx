import React,{useState} from 'react';
import S from 'styled-components';
import axios from 'axios';
import {useSelector} from 'react-redux';

const Messages = (props) => {
    const [sentMessages, setSentMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    // const messagedUser = useSelector(state => state.root.messageSessions)

    console.log(props.messages);

    const handleMessageInput = (event) => {
        setMessageInput(event.target.value)
    }
    const sendMessage = (event,messageInputValue) => {
        console.log(event);
        event.preventDefault();
        setSentMessages([...sentMessages, messageInputValue]);
        setMessageInput('');
    }
    return(
        <MessageContainer>
            <MessagedUserName>{props.messages.firstName} {props.messages.lastName}</MessagedUserName>
            <InnerMessagesContainer>
            {sentMessages.length > 0 ? sentMessages.map( messages => {
                return <UserMessages>{messages}</UserMessages>
            }) : null}
                
            </InnerMessagesContainer>
            <StyledForm onSubmit={(event) => sendMessage(event,messageInput)}>
            <StyledInput onChange={handleMessageInput} type="text" value={messageInput}/>
                <StyledButton>Send</StyledButton>
            </StyledForm>
        </MessageContainer>
    );
}

export default Messages;

const MessageContainer = S.div`
    width: 300px;
    border: 1px solid #000;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    border-bottom: none;
    margin-left: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #fff;
`;
const MessagedUserName = S.h3`
    font-size: 1.8rem;
    background-color: #0077ff;
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #fff;
    letter-spacing: 1px;
    line-height: 40px;
`;
const InnerMessagesContainer = S.div`
    background-color: #fff;
    height: 300px;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #000;
`;
const UserMessages = S.p`
    font-size: 2rem;
    height: fit-content;
    background-color: blue;
    color: #fff;
    border-radius: 5px;
    width: auto;
    margin: 5px;
    padding: 5px;
    width: fit-content;
`;
const StyledInput = S.input`
    width: 200px;
    min-width: 200px
    padding: 5px;
    font-size: 2rem;
    border: none;
    outline: none;
`;
const StyledButton = S.button`
    background-color: blue;
    color: #fff;
    border: none;
    margin: 2px;
    border-radius: 5px;
    padding: 3px;
    font-size: 1.8rem;
    min-width: 50px;
    width: 50px;
`;
const StyledForm = S.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;