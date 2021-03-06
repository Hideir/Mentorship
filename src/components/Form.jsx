import React  from "react";
import S from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = (props) => {
  return (
    <StyledForm action="search" method="post" onSubmit={props.handleSearch}>
         <Styledbutton type='submit'><FontAwesomeIcon icon={faSearch}/></Styledbutton>
    </StyledForm>
  );
};
export default SearchForm;

const StyledForm = S.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-flow: row;
    max-width: 1100px;
    margin-bottom: 40px;
    margin: 0 auto 40px auto;
    width: 80%;
    height: 35px;
    justify-content: center;
    padding: 10px;
`;

const Styledbutton = S.button`
    font-size: 2.4rem;
    color: #fff;
    background-color: #0077ff;
    border: none;
    border-radius: 50px;
    padding: .8rem;
    width: 45px;
    &:hover {
      cursor: pointer;
    }
`;
