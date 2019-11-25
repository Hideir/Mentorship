import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import S from 'styled-components';


// I can set up a useEffect to send out the axios call based on a passed boolean value if the user clicked the next button
const FormWithButton = (props) => {
    const {history, match, location} = props;
    const handleSubmit = event => {
            // Make POST call
            //History . push to next page.
             axios.get(`http://localhost:8080/todo`)
            .then( response => {
              console.log(response);
              history.push("/");
            })
            .catch( error => {
              console.log(error);
            })

            

    }

    // useEffect( () => {
    //     axios.get(`http://localhost:8080/todo`)
    //     .then( response => {
    //       console.log(response);
    //     })
    //     .catch( error => {
    //       console.log(error);
    //     })
    // }, []);

    return(
        <StyledForm onSubmit={handleSubmit}>
            <StyledButton style={{ backgroundColor: '#0077ff', color: '#fff', height: '5rem'}}>Next</StyledButton>
        </StyledForm>
    );
}
export default withRouter(FormWithButton);

const StyledForm = S.form`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
`;
