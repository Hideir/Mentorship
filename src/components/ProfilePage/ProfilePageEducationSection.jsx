import React from 'react';
import S from 'styled-components';

const ProfilePageEducationSection = () => {
	return(
        <EducationContainer>
            <TextContainer>
                <Text primary={true}>{"Blachawk Technical College"}</Text>
                <Text secondary={true}>{"Web Development Computer Science"}</Text>
            </TextContainer>
            <TextContainer>
                <Text primary={true}>{"Lambda School"}</Text>
                <Text secondary={true}>{"Full Stack Web Development"}</Text>
            </TextContainer>
        </EducationContainer>
	);
}

export default ProfilePageEducationSection;

const EducationContainer = S.div`
    margin: 25px;
    display: flex;
    flex-flow: row wrap;
    border-top: 2px solid #c3c3c3;
    margin: 25px auto;
    width: 80%;
    display: flex;
    justify-content: center;
    padding: 25px 0;
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