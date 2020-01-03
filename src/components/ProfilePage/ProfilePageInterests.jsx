import React from 'react';
import S from 'styled-components';

const ProfilePageInterests = (props) => {
	return(

        <InterestsContainer>
            <MidHeading>Interests</MidHeading>
            {props.interests && props.interests.map( (interest,index) => {
                return <InterestCard key={index}><Text>{interest}</Text></InterestCard>
            })}
        </InterestsContainer>
	);
}

export default ProfilePageInterests;

const InterestsContainer = S.div`
    flex-flow: row wrap;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    margin: 8px 10px 0 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #232323c7;
    border: 1px solid rgba(0,0,0,0.2);
    position: relative;
    background-color: #fff;

    @media only screen and (max-width: 860px) {
        width: 100%;
        justify-content: space-around;
        padding: 25px 10px;
	  }
`;
const MidHeading = S.h3`
	font-size: 4rem;
	color: #000;
    width: 100%;
    padding-bottom: 20px;

	@media only screen and (max-width: 860px) {
        font-size: 2.6rem;
	  }
`;
const InterestCard = S.div`
    font-size: 2rem;
    background-color: #2f2c2c;
    color: #fff;
    width: auto;
    padding: 10px 20px;
    border-radius: 1rem;
    transition: 250ms;
    text-transform: capitalize;
    margin-top: 10px;

    &:hover {
      cursor: pointer;
      background-color: #0077ff;
    }

    @media only screen and (max-width: 860px) {
            font-size: 1.4rem;
    }
`;

const Text = S.p`
    font-size: 2rem;
    text-align: center;
    color: #fff;
    letter-spacing: 1px;
    text-transform: capitalize;

    @media only screen and (max-width: 860px) {
        font-size: 1.6rem;
	  }
`;