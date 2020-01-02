import React from 'react';
import S from 'styled-components';
import ProfileEditForm from './ProfileEditForm.jsx';

const ProfileCreationPage = (props) => {
    
    return(
        <MainPageContainer>
            <PageIntroContainer>
                <PageTitle>We're almost done! Tell us a little about yourself.</PageTitle>
                <SubHeading>Don't worry, you will be able to change these later.</SubHeading>
            </PageIntroContainer>
            <ProfileEditForm newSignedUpUser={props.newSignedUpUser} setNewSignedUpUser={props.setNewSignedUpUser}/>
        </MainPageContainer>
    );
}

export default ProfileCreationPage;


const MainPageContainer = S.main`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    margin: 50px auto;
`;
const PageIntroContainer = S.div`
    width: 62%;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
`;
const PageTitle = S.h2`
    font-size: 4rem;
    width: 100%;
    text-align: center;
`;
const SubHeading = S.p`
    font-size: 2.4rem;
    width: 100%;
    color: #0077ff;
    font-style: italic;
    text-align: center;
`;