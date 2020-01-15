import React,{useState} from 'react';
import S from 'styled-components';
import axios from 'axios';

const Messages = (props) => {
    const [sentMessages, setSentMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    console.log(sentMessages);
    console.log(messageInput);

    const handleMessageInput = (event) => {
        setMessageInput(event.target.value)
    }
    const sendMessage = (messageInputValue) => {
        setSentMessages([...sentMessages, messageInputValue]);
        setMessageInput('');
    }
    return(
        <MessageContainer>
        <InnerMessagesContainer>
        {sentMessages.length > 0 ? sentMessages.map( messages => {
            return <UserMessages>{messages}</UserMessages>
        }) : null}
            
        </InnerMessagesContainer>
            <StyledInput onChange={handleMessageInput} type="text" value={messageInput}/>
            <StyledButton onClick={ () => sendMessage(messageInput)}>Send</StyledButton>
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
const StyledButton = S.div`
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