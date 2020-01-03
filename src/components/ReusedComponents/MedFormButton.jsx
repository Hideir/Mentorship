import React from 'react';
import S from 'styled-components';

const MedFormButton = (props) => {
    return(
        <ButtonContainer>
          <StyledButton onClick={props.handleClick} type="submit" secondary="true">
            {props.buttonValue}
          </StyledButton>
        </ButtonContainer>
    );
}
export default MedFormButton;

const ButtonContainer = S.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 860px) {
    margin-top: 20px;
  }
`;

const StyledButton = S.button`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${props => (props.secondary ? "#fff" : "#000")};
  padding: 1rem 2.4rem;
  border-radius: 20px;
  text-decoration: none;
  background-color: ${props => (props.secondary ? "#0077ff" : "transparent")}
  transition: all ease-in-out 120ms;
  height: 4rem;
  width: 200px;
  border: none;
  align-items: center;
  justify-content: center;
  position: relative;
  :hover {
    background-color: ${props =>props.secondary ? "#003c80" : "rgba(194, 194, 194, 0.4)"};
    cursor: pointer;
  }
  :active {
    box-shadow: 0px 0px 5px #232323c7;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 860px) {
    width: 125px;
    font-size: 1.6rem;
    padding: 0;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
`;