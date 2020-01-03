import S from "styled-components";
import { Link } from "react-router-dom";
import BGImg from "../homepage_background.svg";


const FormContainer = S.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${BGImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
const Form = S.form`
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0px 0px 5px #232323c7;
  margin: 0 auto;
  height: 500px;
  display: flex;
  justify-content: space-around;
`;
const Title = S.h2`
  font-size: 40px;
  color: #000;
  text-transform: uppercase;
  margin: 0 auto;
`;
const StyledLink = S(Link)`
  font-size: 18px;
  text-decoration: underline;
  color: ${props => props.errorsignup ? '#0077ff' : '#666'};
  transition: all ease-in-out 100ms;
  :hover {
      color: #000;
  }
`;

const StyledInput = S.input`
  font-size: 2rem;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
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

const StyledSignup = S(Link)`
  font-size: ${props => props.primary ? '2.2rem' : '1.8rem'};
  color: #003c80;
  margin-left: 10px;
  display: flex;
  align-items: center;
  height: 2rem;
  transition: all ease-in-out 120ms;
  :hover {
    letter-spacing: 1px;
  }
`;
const StyledText = S.span`
font-size: 1.8rem;
display: flex;
text-align: ${props => (props.secondary ? "left" : "center")}
width: ${props => (props.secondary ? "80%" : "auto")}
margin: 0 auto;
`;
const StyledLabel = S.label`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: ${props => (props.secondary ? "80%" : "auto")}
  margin: 0 auto;
`;
const ErrorMessage = S.p`
  font-size: 18px;
  color: red;
`;
export {
    FormContainer, 
    Form, 
    Title, 
    ErrorMessage,
    StyledLink, 
    StyledInput, 
    StyledLabel,
    StyledSignup, 
    StyledButton, 
    StyledText 
}