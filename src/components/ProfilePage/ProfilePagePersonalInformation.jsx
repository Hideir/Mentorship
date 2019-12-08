import React from 'react';
import S from 'styled-components';

const ProfilePagePersonalInformation = (props) => {
	return(
        <>
            <CardContainer>
                <InformationContainer>
                    <InformationContainer personalInformation="true">
                        <Text primary={true}> {props.firstName}</Text>
                        <Text primary={true}> {props.lastName}</Text>
                    </InformationContainer>
                    <InformationContainer personalInformation="true">
                        <Text>{props.city}</Text>
                        <Text>{props.state}</Text>
                    </InformationContainer>
                    <InformationContainer>
                        <Text>{props.tagLine}</Text>
                    </InformationContainer>
                </InformationContainer>
            </CardContainer>
        </>
	);
}

export default ProfilePagePersonalInformation;

const CardContainer = S.div`
    width: 70%;
    display: flex;
    align-items: flex-end;
`;
const InformationContainer = S.div`
    width: ${props => props.personalInformation ? '55%' : '100%'};
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
`;
const Text = S.p`
    font-size: ${props => props.primary ? '3rem' : '2rem' };
    padding-left: 10px;
    text-align: left;
`;