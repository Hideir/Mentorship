import React, {useState,useEffect} from 'react';
import S from 'styled-components';
import axios from 'axios';

import ProfilePagePersonalInformation from './ProfilePagePersonalInformation';
import ProfilePageInterests from './ProfilePageInterests';
import ProfilePageEducationSection from './ProfilePageEducationSection';
// const email = localStorage.getItem('userEmail');

const ProfilePage = (props) => {
	const [profileData, setProfileData] = useState({})
	const emailAddr = props.newSignedUpUserEmail;
	const {firstName, lastName, interests,state, city, tagLine, education} = profileData;
	useEffect( () => {
		// retrieve the token from local storage
		let token = localStorage.getItem('auth-token');
		console.log(token);
			 axios.post('https://hideir.herokuapp.com/profile', {emailAddr}, {  
				headers: {
				  'content-type': 'application/json', // Tell the server we are sending this over as JSON
				  'authorization': token, // Send the token in the header from the client.
				},
			  })
			.then( async response => {
				await setProfileData(response.data.usersProfileData[0]);
			})
			.catch(error => console.log(error))
	},[])

	return(
		<PageWrapper>
			<ProfileContainer>
				<ProfileHeaderContainer>
					<ProfileHeaderTrim></ProfileHeaderTrim>
					<ProfileImage></ProfileImage>
					<ProfilePagePersonalInformation firstName={firstName} lastName={lastName} state={state} city={city} tagLine={tagLine}/>
				</ProfileHeaderContainer>
				<MidHeading>Interests</MidHeading>
				<ProfilePageInterests interests={interests}/>
				<MidHeading>Education</MidHeading>	
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
	margin-top: 140px;
`;
const ProfileContainer = S.div`
	width: 50%;
	display: flex;
	flex-flow: row wrap;
	margin: 100px auto;
	background-color: #ececec;
	border-radius: 15px;
	box-shadow: 0px 3px 10px #666;
`;
const ProfileHeaderContainer = S.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	position: relative;
	height: 270px;
`;
const ProfileHeaderTrim = S.div`
	width: 100%;
	height: 100px;
	background-color: #0077ff;
	position: absolute;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;
const ProfileImage = S.div`
	width: 200px;
    height: 200px;
    border-radius: 62%;
    background-color: #c3c3c3;
    z-index: 1;
    margin: 25px 25px 0 25px;
    box-shadow: 1px 2px 5px -1px #3e3d33;
`;
const MidHeading = S.h3`
	font-size: 4rem;
	color: #000;
	width: 100%;
`;
