import React from 'react'
import S from 'styled-components';

const InboxMessage = () => {
    return(
        <MessageContainer>
            <Message>here is a long messagehere is a long message here is a long message here is a long message here is a long message
            here is a long message here is a long message here is a long message</Message>
        </MessageContainer>
    );
}
export default InboxMessage;

const MessageContainer = S.div`
    padding: 20px;
    box-sizing: border-box;
`;
const Message = S.p`
    font-size: 2rem;
`;