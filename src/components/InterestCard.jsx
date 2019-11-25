import React,{useState, useEffect} from 'react'
import axios from 'axios';
import S from 'styled-components';
import '../App.css';

const InterestCard = (props) => {
    // State
    const {selectedInterests, setSelectedInterests, interests} = props;
    const [hasActiveClass, setHasActiveClass] = useState(false);

    // Event Handlers
    const clickHandler  =  async () => {
        if(!hasActiveClass) {
            await setHasActiveClass(true);
            setSelectedInterests([...selectedInterests, interests.interestName]);
        } else if(hasActiveClass) {
             await setHasActiveClass(false);
             setSelectedInterests( selectedInterests.filter( deselectedInterest  => deselectedInterest !== interests.interestName))
        }
    }
    // Component Update Changes
    useEffect( () => {
    },[])
    return(
        <CardContainer className={hasActiveClass ? "hasInterest" : null} data-interest-name={interests.interestName} onClick={clickHandler}>
            <Title>{interests.interestName.toUpperCase()}</Title>
            <p>:interestImage:</p>
        </CardContainer>
    );
}

export default InterestCard;

const  CardContainer = S.div`
    width: 200px;
    height: 200px;
    border-radius: 5%;
    background-color: #c3c3c3;
    padding: 15px;
    margin: 20px 15px;
    transition: all ease-in-out 120ms;
    position: relative;
    :hover {
        cursor: pointer;
        
    }
    :active {
        box-shadow: 0px 2px 5px 0px #464545;
        transform: scale(1.15);
      }
`;
const Title = S.h6`
    font-size: 2.4rem;
`;



