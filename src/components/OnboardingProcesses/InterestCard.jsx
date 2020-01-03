import React,{useState} from 'react'
import S from 'styled-components';
import '../../App.css';

const InterestCard = (props) => {
    const {selectedInterests, setSelectedInterests, interests} = props;
    // State
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
    // Component Update
    return(
        <CardContainer className={hasActiveClass ? "hasInterest" : null} data-interest-name={interests.interestName} onClick={clickHandler}>
            <Title>{interests.interestName.toUpperCase()}</Title>
            <p>:interestImage:</p>
        </CardContainer>
    );
}

export default InterestCard;

const  CardContainer = S.div`
    width: 150px;
    height: 150px;
    border-radius: 5px;
    background-color: #c3c3c3;
    padding: 15px;
    margin: 0 5px 15px 5px;
    transition: all ease-in-out 120ms;
    position: relative;
    :hover {
        cursor: pointer;
    }
    :active {
        box-shadow: 0px 0px 5px #232323c7;
        transform: scale(1.15);
      }
      @media only screen and (max-width: 860px) {
        width: 90px;
        height: 90px;
        margin: 0 8px 15px 8px;
	  }
`;
const Title = S.h6`
    font-size: 2.4rem;

    @media only screen and (max-width: 860px) {
        font-size: 1.6rem;
	  }
`;



