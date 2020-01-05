import React, {useState,useEffect} from 'react';
import S from 'styled-components';
import axios from 'axios';

import ProfilePagePersonalInformation from './ProfilePagePersonalInformation';
import ProfilePageInterests from './ProfilePageInterests';
import ProfilePageEducationSection from './ProfilePageEducationSection';

const ProfilePage = (props) => {
	const [profileData, setProfileData] = useState({})
	const routedEmail = props.location.state.loggedInUser ? props.location.state.loggedInUser.email  : props.location.state.user.email;
	const userId = props.location.state.loggedInUser ? props.location.state.loggedInUser.id : props.location.state.user.userId;
	// const emailAddr = props.newSignedUpUserEmail;
	const {firstName, lastName, interests,state, city, tagLine, education} = profileData;

	useEffect( () => {
		// retrieve the token from local storage
		let token = localStorage.getItem('auth-token');
		const getProfileData = (profileId, filter) => {
			axios.post(`/profile/${profileId}`, {filter}, {  
				headers: {
				  'content-type': 'application/json', // Tell the server we are sending this over as JSON
				  'authorization': token, // Send the token in the header from the client.
				},
			  })
			.then( async response => {
				await setProfileData(response.data.usersProfileData[0]);
			})
			.catch(error => console.log(error))
		}

		if(routedEmail) getProfileData(userId,routedEmail);

	},[userId]);

	return(
		<PageWrapper>
			<ProfileContainer>
				<ProfileHeaderContainer>
					<ProfileHeaderTrim></ProfileHeaderTrim>
					<ProfileImage></ProfileImage>
					<ProfilePagePersonalInformation firstName={firstName} lastName={lastName} state={state} city={city} tagLine={tagLine}/>
				</ProfileHeaderContainer>
				<ProfilePageInterests interests={interests}/>
				<ProfilePageEducationSection education={education}/>
			</ProfileContainer>
		</PageWrapper>
	);
}

export default ProfilePage;

const PageWrapper = S.main`
	width 100%;
	display: flex;
	flex-flow: row wrap;
	border-radius: 15px;
	@media only screen and (max-width: 860px) {
		margin-top: 0;
	  }
`;
const ProfileContainer = S.div`
	width: 50%;
	display: flex;
	flex-flow: row wrap;
	margin: 100px auto;
	background-color: #fff;
	border-radius: 15px;

	@media only screen and (max-width: 860px) {
		width: 100%;
		margin-top: 0;
		border-bottom-right-radius: 0;
    	border-bottom-left-radius: 0;
	  }
`;
const ProfileHeaderContainer = S.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	position: relative;
	min-height: 270px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
	margin: 10px;
    margin-bottom: 0;
	box-shadow: 0px 0px 5px #232323c7;
    border: 1px solid rgba(0,0,0,0.2);

	@media only screen and (max-width: 860px) {
		align-items: baseline;
		justify-content: center;
		min-height: 240px;
	  }
`;
const ProfileHeaderTrim = S.div`
	width: 100%;
	height: 100px;
	background-color: #0077ff;
	position: absolute;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	@media only screen and (max-width: 860px) {
		height: 75px;
	  }
`;
const ProfileImage = S.div`
	width: 200px;
    height: 200px;
    border-radius: 62%;
    background-color: #c3c3c3;
    z-index: 1;
    margin: 25px 25px 0 25px;
	box-shadow: 0px 0px 5px #232323c7;
	
	@media only screen and (max-width: 860px) {
		height: 100px;
		width: 100px;
		margin: 0;
		margin-top: 25px;
	  }
`;

