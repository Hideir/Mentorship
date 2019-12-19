import React  from "react";
import S from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  return (
    <StyledForm>
        <StyledInput type="text" placeholder="Search for liked minded people" />
        <Styledbutton type='submit'><FontAwesomeIcon icon={faSearch}/></Styledbutton>
    </StyledForm>
  );
};
export default SearchForm;

const StyledForm = S.form`
    background-color: #ffffff;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    flex-flow: row;
    max-width: 1100px;
    border-radius: 50px;
    margin-bottom: 40px;
    margin: 0 auto 40px auto;
    width: 80%;
    height: 35px;
    justify-content: space-between;
    padding: 10px;
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
    padding: .8rem;
    width: 45px;
`;
