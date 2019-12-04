import React  from "react";
import S from "styled-components";


const SearchForm = () => {
  return (
    <StyledForm>
        <StyledInput type="text" placeholder="Search for a mentor" />
        <Styledbutton type='submit'>Find Mentors</Styledbutton>
    </StyledForm>
  );
};
export default SearchForm;

const StyledForm = S.form`
    background-color: #ffffff;
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
    padding: 10px 0;
    max-width: 1100px;
    border-radius: 50px;
    margin-bottom: 40px;
    margin: 0 auto 40px auto;
    width: 80%;
    height: 60px;
`;
const StyledInput = S.input`
    font-size: 2.2rem;
    width: 70%;
    background-color: transparent;
    border: none;
    height: 50px;
    color: #000;
    outline: none;
`;
const Styledbutton = S.button`
    font-size: 2.4rem;
    color: #fff;
    background-color: #0077ff;
    border: none;
    border-radius: 50px;
    padding: 1rem;
    width: 200px; 
`;
