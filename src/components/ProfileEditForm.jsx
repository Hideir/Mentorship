import React,{useState, useEffect} from 'react';
import axios from 'axios';
import S from 'styled-components';

import { StyledText, ErrorMessage} from './StyledComponents/FormStyledComponents';

const ProfileEditForm = (props) => {
    // Set up State
    const [profileObject, setProfileObject]= useState({...props.newSignedUpUser,        

    });
    const [profileInformation, setProfileInformation] = useState({
        firstName: '',
        lastName: '',
        tagLine: '',
        education: '',
        region: '',
        zipCode: '',
        state: ''
    });


    // Set up event functions
    const handleInputChange = async (event) => {
        await setProfileInformation({...profileInformation, [event.target.name]: event.target.value});
        await setProfileObject({...props.newSignedUpUser, profileInformation});
        console.log({profileInformation});
        console.log({profileObject});
    }

        const fakePostCall = () => {
            axios.post("https://reqres.in/api/users/", {profileObject})
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
        }

    return(
        <BigFormContainer>
            <Form>
                <Title>Edit Profile Information</Title>
                <Label>First Name
                    <Input onChange={handleInputChange} type="text" name="firstName"/>
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
                    <Input onChange={handleInputChange}  type="text" name="region"/>
                </Label>
                <Label>Zip Code
                    <Input onChange={handleInputChange}  type="text" name="zipCode"/>
                </Label>
                <Label>State
                    <Input onChange={handleInputChange}  type="text" name="state"/>
                </Label>
                <NextButtonContainer >
                    <NextButton  onClick={fakePostCall} style={{ backgroundColor: '#0077ff', color: '#fff'}}>Next</NextButton>
                </NextButtonContainer>
            </Form>
        </BigFormContainer>
    );
}

export default ProfileEditForm;

const BigFormContainer = S.div`
    width: 40%;
    margin: 40px auto;
`;
const Form = S.form`
   display: flex;
   flex-flow: row wrap;
   width: 100%;
   background-color: #c3c3c3;
   border-radius: 15px;
   padding: 2rem;
   justify-content: space-between;
   box-sizing: border-box;
`;
const Title = S.h2 `
    font-size: 3rem;
    width: 100%;
    text-align: left;
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
const NextButton = S.div`
    display: flex;
    text-transform: uppercase;
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
        box-shadow: 0px 2px 5px 0px #464545;
        transform: scale(1.1);
    }
`;