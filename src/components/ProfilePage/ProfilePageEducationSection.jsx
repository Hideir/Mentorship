import React from 'react';
import S from 'styled-components';

const ProfilePageEducationSection = (props) => {
	return(
        <EducationContainer>
        	<MidHeading>Education</MidHeading>
            <TextContainer>
                <Text primary={true}>{props.education}</Text>
                </TextContainer>
        </EducationContainer>
	);
}

export default ProfilePageEducationSection;

const EducationContainer = S.div`
    flex-flow: row wrap;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    margin: 8px 10px 0 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #d1d1d1;
    border: 1px solid rgba(0,0,0,0.2);
    position: relative;
    background-color: #fff;
    @media only screen and (max-width: 860px) {
        padding: 25px 0;
	  }
`;
const MidHeading = S.h3`
	font-size: 4rem;
	color: #000;
	width: 100%;
    
	@media only screen and (max-width: 860px) {
        font-size: 2.6rem;
	  }
`;
const TextContainer = S.div`
    display: flex;
    flex-direction: column
    width: 100%;
    margin-top: 25px;
`;
const Text = S.p`
    font-size: ${props => props.primary ? '2.4rem' : '2rem'};
    color: #000;
    letter-spacing: 1px;
    font-weight: ${props => props.primary ? '600' : '400'};
    text-decoration: ${props => props.secondary ? 'underline' : null};
`;