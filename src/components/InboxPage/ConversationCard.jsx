import React from 'react'
import axios from 'axios';
import S from 'styled-components';

const InboxPage = () => {
    return(
        <ConvoCard>
            <UserName>Dylan Sieren</UserName>
            <DisplayedMessage>fgsdfgsdfg fsgsd fgsdfg sdf gsdf gfsgfdgwaerawe a sdfasd fas fadf
            sdfgsdfgsfd gsdf gs dfgsfd gsd fgs dfgsf dgf</DisplayedMessage>
        </ConvoCard>
    );
}
export default InboxPage;

const ConvoCard = S.div`
    border-bottom: 1px solid #999;
    padding: 10px;
`;
const UserName = S.h6`
    font-size: 2.4rem;
    font-weight: 500;
    text-align: left;
`;
const DisplayedMessage = S.p`
    font-size: 2rem;
`;