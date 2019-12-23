import React from 'react';
import S from 'styled-components';

const ProfilePageInterests = (props) => {
	return(

        <InterestsContainer>
            {props.interests && props.interests.map( (interest,index) => {
                return <InterestCard key={index}><Text>{interest}</Text></InterestCard>
            })}
        </InterestsContainer>
	);
}

export default ProfilePageInterests;

const InterestsContainer = S.div`
    margin: 25px;
    display: flex;
    flex-flow: row wrap;
    border-top: 2px solid #c3c3c3;
    margin: 25px auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
`;

const InterestCard = S.div`
    width: 150px;
    height: 150px;
    background-color: #07f;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 20px;
`;
const Text = S.p`
    font-size: 2rem;
    text-align: center;
    color: #fff;
    letter-spacing: 1px;
`;