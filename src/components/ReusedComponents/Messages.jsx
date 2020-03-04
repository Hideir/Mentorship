import React,{useState, useEffect} from 'react';
import S from 'styled-components';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { setMessagesGet} from '../../actions';
import '../../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';



let authToken = localStorage.getItem('auth-token'); 
const Messages = (props) => {
    // local state
    const [messageInput, setMessageInput] = useState('');
    // dispatch
    const dispatch = useDispatch();
    // Redux State
    const currentMessages = useSelector(state => state.messageReducer.messages);
    const loggedInUser = useSelector( state => state.root.loggedInUser);
    console.log(loggedInUser);
    // deconstruction
    const receiveingUserId = props.activeMessageSessions.id;
    const loggedInUserId = loggedInUser.id;
    // Create an array of related messages.
    const userMatchingMessages = currentMessages.map(messageObject => {
        if(messageObject.receiverId === props.activeMessageSessions.id) {
            return messageObject.message;
        }
    });
    const filteredMessages = userMatchingMessages.filter(messages => messages != false && messages != undefined);

    const handleMessageInput = (event) => {
        setMessageInput(event.target.value);
    }
    const sendMessage = (event,messageInputValue) => {
         if(messageInputValue == false) {
             event.preventDefault();
             return;
         } 
        event.preventDefault();
        // need an axios call to post these messages.
        axios.post(`${process.env.REACT_APP_API_LOCAL || process.env.REACT_APP_API_URL}/send-message`, {
            senderId: loggedInUserId,
            receiverId: props.activeMessageSessions.id,
            message: messageInputValue,
            sentAt: Date.now()
        }, {
            headers: {
                "content-type": "application/json", // Tell the server we are sending this over as JSON
                authorization: authToken // Send the token in the header from the client.
            }
        })
        
        .then(response => {
            console.log(response);
            dispatch({
                type: "SET_MESSAGES",
                payload: {
                  senderId: loggedInUserId,
                  receiverId: props.activeMessageSessions.id,
                  message: messageInputValue,
                  sentAt: Date.now()
                }
              });
        })
        .catch(error => {
            console.log(error);
        })
        setMessageInput('');
    }             

    const handleClose = (id) => {
        dispatch({type: "DELETE_MESSAGE_SESSION", payload: id}) ;
    }
    const minimizeMessage = (event) => {
        event.target.parentElement.classList.toggle('minimize');
    }

    useEffect( () => {
        if(currentMessages.length <= 0) {
            dispatch(setMessagesGet(loggedInUserId));
        }
    }, []);

    return(
        <MessageContainer>
            <MessagedUserName onClick={minimizeMessage} >{props.activeMessageSessions.firstName} {props.activeMessageSessions.lastName}</MessagedUserName>
            <ExitButton onClick={() => handleClose(props.activeMessageSessions.id)}><FontAwesomeIcon icon={faTimes}/></ExitButton>
            <InnerMessagesContainer>
                {filteredMessages.length > 0 ? filteredMessages.map( (messages,index) => {
                    return (
                        <UserMessages key={index}>
                            <TitleAndContentMessageCotnainer>
                            <StyledP><StyledLink to={{ pathname: `/profile/${loggedInUserId}`, state: { loggedInUser } }}>{loggedInUser.firstName} {loggedInUser.lastName}</StyledLink></StyledP>
                            <StyledP>{messages}</StyledP>
                            </TitleAndContentMessageCotnainer>
                        </UserMessages>
                    )
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
    position: relative;
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
    overflow: scroll;
`;
const UserMessages = S.div`
    height: fit-content;
    border-radius: 5px;
    width: auto;
    margin: 5px;
    padding: 5px;
    width: fit-content;
`;
const TitleAndContentMessageCotnainer = S.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const StyledP = S.p`
    text-align: left;
    font-size: 1.6rem;
    color: #000;
`;
const StyledLink = S(Link)`
    font-size: 1.8rem;
    color: #000;
    font-weight: bold;
    text-decoration: none;
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
    font-size: 24px;
    color: #fff;
    padding: 2px 5px 0px 5px;
    text-align: right;
    z-index: 1000;
    transition: all ease 120ms;
    right: 10px;
    position: absolute;
    &:hover {
        cursor: pointer;
        color: #000;
    }
`;