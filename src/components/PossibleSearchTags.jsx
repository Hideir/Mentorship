import React,{useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import '../App.css';
import S from 'styled-components'

const PossibleSearchTags = (props) => {
    const dispatch = useDispatch();
    const {selectedTags, interests} = props;
    const [hasActiveClass, setHasActiveClass] = useState(false);


  useEffect( () => {
    if(selectedTags.length <= 0) {
      setHasActiveClass(false);
    }
  },[selectedTags]);

    const storeSelectedTags = async () => {
        if(!hasActiveClass) {
          await setHasActiveClass(true);
          //  setSelectedTags([...selectedTags, interests.interestName]);
           dispatch({type: 'SET_SELECTED_TAGS', payload: [...selectedTags, interests.interestName]})
      } else if(hasActiveClass) {
          await setHasActiveClass(false);
          //  setSelectedTags( selectedTags.filter( deselectedInterest  => deselectedInterest !== interests.interestName))
           dispatch({type: 'SET_SELECTED_TAGS', payload: selectedTags.filter( deselectedInterest => deselectedInterest !== interests.interestName)})
      }
      }
    return(
              <SelectedInterestTags className={hasActiveClass ? "hasInterest" : null}  onClick={storeSelectedTags} name={interests.interestName}>
                {interests.interestName}
              </SelectedInterestTags>
    );
}


export default PossibleSearchTags;

// Search Labels
const SelectedInterestTags = S.li`
    font-size: 1.8rem;
    background-color: ${props => (props.primary ? "#fff" : "#2f2c2c")};
    color: ${props => (props.primary ? "#000" : "#fff")};;
    width: auto;
    padding: 10px 20px;
    margin: 0 10px 10px 0;
    border-radius: 1rem;
    transition: 250ms;
    text-transform: capitalize;
    &:hover {
      cursor: pointer;
      background-color: #0077ff;
    }
`;
