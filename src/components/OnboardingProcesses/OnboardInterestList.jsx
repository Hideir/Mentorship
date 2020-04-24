import React,{useEffect, useState}from 'react'
import axios from 'axios';
import S from 'styled-components';
import InterestCard from './InterestCard';
import {withRouter} from 'react-router-dom';
import MedFormButton from '../ReusedComponents/MedFormButton';

const authToken = localStorage.getItem('auth-token');

const OnboardInterestList = (props) => {

    const [interests, setInterests] = useState([]);

    useEffect( () => {
      const getInterests = () => {
        axios.get(`${process.env.REACT_APP_API_LOCAL || process.env.REACT_APP_API_URL}/signup/interests`, {  
            headers: {
            'content-type': 'application/json', // Tell the server we are sending this over as JSON
            'authorization': authToken, // Send the token in the header from the client.
            },
        })
        .then( async response => {
            await setInterests(response.data.interests);
        })
        .catch(error => console.log(error))
      }
      getInterests();
    }, []);
    
    // const usersInterests = useSelector(state => state.root.newSignedUpUser.interests);
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
            {interests.map( (interest, index) => {
                return(
                    <InterestCard
                        interestCardCounter={cardCounter++}
                        key={index}
                        interest={interest}
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
