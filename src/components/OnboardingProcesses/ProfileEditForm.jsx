import React,{useState} from 'react';
import axios from 'axios';
import S from 'styled-components';
import {withRouter} from 'react-router-dom';
import CountrySelectList from '../CountrySelectList';
import StateSelectList from '../StateSelectList';

const ProfileEditForm = (props) => {
    // Set up State
    const [profileObject, setProfileObject]= useState({...props.newSignedUpUser});
    const [profileInformation, setProfileInformation] = useState({
        firstName: '',
        lastName: '',
        tagLine: '',
        education: '',
        region: 'us',
        city: '',
        state: ''
    });
    // Set up event functions
    const handleInputChange = async (event) => {
        await setProfileInformation({...profileInformation, [event.target.name]: event.target.value});
        await setProfileObject({...props.newSignedUpUser, profileInformation});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userEmail', profileObject.email);
        // Send our data({email, password}) to the /signup endpoint on our server, with the email and password in the body
          axios.post(`/signup/add-profile`, {profileObject}, {  
            headers: {
              'content-type': 'application/json' // Tell the server we are sending this over as JSON
            },
          })
          .then(function (response) {
            console.log(response.data);
            props.history.push("/profile");
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    return(
        <BigFormContainer>
            <Form action='/signup/add-profile' method="post" onSubmit={handleSubmit}>
                <Title>Edit Profile Information</Title>
                <Label>First Name
                    <Input onChange={handleInputChange} type="text" name="firstName" value={profileInformation.firstName}/>
                </Label>
                <Label>Last Name
                    <Input onChange={handleInputChange} type="text" name="lastName"/>
                </Label>
                <Label primary="true" >Tag Line
                    <Input onChange={handleInputChange}  primary="true" type="text" name="tagLine"/>
                </Label>
                <Label primary="true" >Education
                    <Input onChange={handleInputChange}  type="text" name="education"/>
                </Label>
                <Label>Country/Region
                    <CountrySelectList handleInputChange={handleInputChange} profileInformation={profileInformation}/>
                </Label>
                <Label>City
                    <Input onChange={handleInputChange}  type="text" name="city"/>
                </Label>
                <Label>State
                    <StateSelectList handleInputChange={handleInputChange} profileInformation={profileInformation}/>
                </Label>
                <NextButtonContainer >
                    <NextButton type="submit" style={{ backgroundColor: '#0077ff', color: '#fff'}}>Next</NextButton>
                </NextButtonContainer>
            </Form>
        </BigFormContainer>
    );
}

export default withRouter(ProfileEditForm);

const BigFormContainer = S.div`
    width: 40%;
    margin: 40px auto;

    @media only screen and (max-width: 860px) {
        width: 90%;
        margin-bottom: 100px;
	  }
`;
const Form = S.form`
  display: flex;
  flex-flow: row wrap;
   width: 100%;
   background-color: #fff;
   border-radius: 5px;
   padding: 2rem;
   justify-content: space-between;
   box-sizing: border-box;
   box-shadow: 0px 0px 5px #232323c7;
`;
const Title = S.h2 `
    font-size: 3rem;
    width: 100%;
    text-align: left;

    @media only screen and (max-width: 860px) {
        font-size: 2.6rem;
      }
`;
const Label = S.label`
    width: ${props => props.primary ? "100%" : "49%"};
    font-size: 2rem;
    text-align: left;
    margin-top: 20px;
`;
const Input = S.input`
    width: 100%;
    border-radius: 5px;
    font-size: 1.8rem;
    padding: 10px;
    box-sizing: border-box;
    border: #000 1px solid;
    outline: none;
    margin-top: 5px;
`;
const NextButtonContainer = S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
const NextButton = S.button`
    display: flex;
    text-transform: capitalize;
    font-weight: 600;
    align-items: center;
    font-size: 2rem;
    color: ${props => (props.secondary ? "#fff" : "#000")};
    padding: .8rem 2.4rem;
    border-radius: 50px;
    text-decoration: none;
    background-color: ${props =>
        props.secondary ? "#0077ff" : "transparent"}
    transition: all ease-in-out 120ms;
    width: 100px;
    border: none;
    align-items: center;
    justify-content: center;
    :hover {
    background-color: ${props =>
        props.secondary ? "#003c80" : "rgba(194, 194, 194, 0.4)"};
        cursor: pointer;
    }
    :active {
        box-shadow: 0px 0px 5px #232323c7;
        transform: scale(1.1);
    }
`;