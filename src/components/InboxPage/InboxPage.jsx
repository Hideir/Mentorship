import React from 'react'
import S from 'styled-components';
import ConvoCard from './ConversationCard';
import InboxForm from './InboxForm';
import InboxMessage from './InboxMessage';

const InboxPage = () => {
    return(
        <PageContainer>
            <LeftSideBar>
            <PageTitle>Messages</PageTitle>
                <ConvoCard />
            </LeftSideBar>
            <RightSideBar>
                <InboxMessage />
                <InboxForm />
            </RightSideBar>
        </PageContainer>
    );
}
export default InboxPage;

const PageContainer = S.div`
    width: 80%;
    margin: 100px auto 0 auto;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid #d3d3d3;
    border-left: none;
    border-radius: 5px;
`;
const PageTitle = S.h2`
    font-size: 2.8rem;
    border-bottom: 1px solid #d3d3d3;
    text-align: left;
    padding: 10px;
`;
const LeftSideBar = S.aside`
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    box-sizing: border-box;
`;
const RightSideBar = S.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
