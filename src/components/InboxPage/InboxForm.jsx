import React from 'react'
import axios from 'axios';
import S from 'styled-components';
import {StyledInput, StyledButton} from '../StyledComponents/FormStyledComponents';

const InboxForm = () => {
    return(
        <StryledForm>
            <StyledInput type="text" name="message"/>
            <StyledButton>Send</StyledButton>
        </StryledForm>
    );
}
export default InboxForm;

const StryledForm = S.form`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;