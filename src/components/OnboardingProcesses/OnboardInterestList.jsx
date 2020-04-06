import React from 'react'
// import {useSelector} from 'react-redux';
import S from 'styled-components';
import InterestCard from './InterestCard';
import {interestsArray} from './interestData';
import {withRouter} from 'react-router-dom';
import MedFormButton from '../ReusedComponents/MedFormButton';


const OnboardInterestList = (props) => {

    // const usersInterests = useSelector(state => state.root.newSignedUpUser.interests);
    // console.log(usersInterests);
    let cardCounter = 1;

    const pushUser = () => {
        props.history.push("/signup/add-profile");
    }
    return(
        <CardContainer>
        {/* Create labels for selected interests*/ }
            <SelectedInterestTagsContainer>
                {/* <SelectedInterestUl>
                    {usersInterests == false ? null : usersInterests.map( (interests, index) => {
                        return <SelectedInterestTags key={index}>{interests}</SelectedInterestTags>
                    })}
                </SelectedInterestUl> */}
            </SelectedInterestTagsContainer>
            <SelectedInterestTagsContainer>
            {interestsArray.map( (interests, index) => {
                return(
                    <InterestCard
                        interestCardCounter={cardCounter++}
                        key={index}
                        interests={interests}
                    />
                );
            })}
            </SelectedInterestTagsContainer>
            <MedFormButton  handleClick={pushUser} buttonValue={'Next'}/>
        </CardContainer>
    );
}

export default withRouter(OnboardInterestList);

const  CardContainer = S.section`
    display: flex;
    flex-flow: row wrap;
    width: 62%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 860px) {
        width: 90%;
	  }
`;

const SelectedInterestTagsContainer = S.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media only screen and (max-width: 860px) {
        justify-content: space-around;
	  }
`;
// const SelectedInterestUl = S.ul`
//     display: flex;
//     list-style: none;
//     margin-bottom: 20px;
//     width: 90%;
//     flex-flow: row wrap;
//     height: auto;
//     &::after {
//         content: 'nothing';
//         font-size: 0;
//         height: 55px;
//         width: 10px;
//         background-color: transparent;
//     }
// `;
// const SelectedInterestTags = S.li`
//     font-size: 1.8rem;
//     background-color: #2f2c2c;
//     color: #fff;
//     width: auto;
//     padding: 10px 20px;
//     margin: 0 10px 10px 0;
//     border-radius: 1rem;
//     text-transform: capitalize;

//     @media only screen and (max-width: 860px) {
//         font-size: 1.4rem;
// 	  }
// `;
