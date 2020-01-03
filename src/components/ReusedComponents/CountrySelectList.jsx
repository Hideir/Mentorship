import React from 'react';
import S from 'styled-components';

const CountySelectList = (props) => {
    return(
    <Select onChange={props.handleInputChange} name="region" value={props.profileInformation.region}>
        <option value="us">United States</option>
    </Select>
    );
}
export default CountySelectList;

const Select = S.select`
    width: 100%;
    border-radius: 5px;
    font-size: 1.8rem;
    padding: 10px;
    box-sizing: border-box;
    border: #000 1px solid;
    outline: none;
    margin-top: 5px;
`;