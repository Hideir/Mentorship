import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import S from 'styled-components';
import {withRouter} from 'react-router-dom';
import MedFormButton from '../ReusedComponents/MedFormButton';
import CountrySelectList from '../ReusedComponents/CountrySelectList';
import StateSelectList from '../ReusedComponents/StateSelectList';


const ProfileEditForm = (props) => {
    // Set up State
    const newSignedUpUser = useSelector(state => state.root.newSignedUpUser);
    // Create a new profile object to disconnect from global state.
    const [profileObject, setProfileObject]= useState({...newSignedUpUser});
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
        // update the profile information based off user input.
        await setProfileInformation({...profileInformation, [event.target.name]: event.target.value});
        // pass that updated information object into the profile object, plus whatever is in the newSignedUpUsder object.
        await setProfileObject({...newSignedUpUser, profileInformation});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userEmail', profileObject.email);
        // Send our data({email, password}) to the /signup endpoint on our server, with the email and password in the body
          axios.post(`${process.env.REACT_APP_API_URL}/signup/add-profile`, {profileObject}, {  
            headers: {
              'content-type': 'application/json' // Tell the server we are sending this over as JSON
            },
          })
          .then(function (response) {
            props.history.push("/");
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
                <MedFormButton buttonValue={'Next'}/>
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
