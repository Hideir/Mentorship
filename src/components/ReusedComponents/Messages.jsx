import React,{useState, useEffect} from 'react';
import S from 'styled-components';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import '../../App.css';




const Messages = (props) => {
    const dispatch = useDispatch();

    const [messageInput, setMessageInput] = useState('');
    const currentMessages = useSelector(state => state.messageReducer.messages);

    const handleMessageInput = (event) => {
        setMessageInput(event.target.value);
    }
    const sendMessage = (event,messageInputValue) => {
        event.preventDefault();
        dispatch({type: 'SET_MESSAGES', payload: messageInputValue});
        // need an axios call to post these messages.
        setMessageInput('');
    }             

    const handleClose = (id) => {
        dispatch({type: "DELETE_MESSAGE_SESSION", payload: id}) ;
    }
    const minimizeMessage = (event) => {
        console.log(event.target.parentElement);
        event.target.parentElement.classList.toggle('minimize');
    }
    return(
        <MessageContainer>
            <MessagedUserName onClick={minimizeMessage} >{props.messages.firstName} {props.messages.lastName}</MessagedUserName>
            <ExitButton onClick={() => handleClose(props.messages.id)}>exit</ExitButton>
            <InnerMessagesContainer>
                {currentMessages.length > 0 ? currentMessages.map( messages => {
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
    max-height: 500px;
    max-width: 500px;
    transition: all ease-in-out 300ms;
`;
const MessagedUserName = S.h3`
    font-size: 1.6rem;
    background-color: #0077ff;
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #fff;
    letter-spacing: 1px;
    line-height: 40px;
    text-transform: capitalize;
    text-align: left;
    padding-left: 10px;
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

const ExitButton = S.div`
    font-size: 20px;
    color: #000;
    padding: 5px;
    text-align: right;
    z-index: 1000;
    transition: all ease 100ms;
    right: 10px;
    &:hover {
        cursor: pointer;
        color: #fff;
    }
`;