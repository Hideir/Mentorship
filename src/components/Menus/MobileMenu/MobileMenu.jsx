import React, {useState} from "react";
import S from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faSignOutAlt,faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./MobileMenu.css";

const MobileMenu = (props) => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const {loggedInUser} = props;

  const handleClick = () => {
    if(isMobileActive === true) {
      setIsMobileActive(false);
    } else if(isMobileActive === false) {
        setIsMobileActive(true);
    }
  }
  return (
    <div className="hamburgerWrapper">
      <StyledUL>
        {props.IsLoggedIn
        ? <StyledLi> <StyledLink to ="/"  className="iconLinks"> <FontAwesomeIcon icon={faHome}/> Home </StyledLink> </StyledLi>
        : null
        }
        {props.IsLoggedIn
        ? <StyledLi> <StyledLink to={{pathname: `/profile/${props.loggedInUser.id}`, state: {loggedInUser}}} className="iconLinks"> <FontAwesomeIcon icon={faUser}/> Profile</StyledLink> </StyledLi>
        : null
        }
        {props.IsLoggedIn
        ?<div id="hamburgerMenuContainer" className={isMobileActive ? 'toggle-active' : null} onClick={handleClick}>{/* <div className="hamburger-menu"><span></span></div> */}<FontAwesomeIcon icon={faPlus}/></div>
        : null  
        }  
        <StyledLi>
            {props.IsLoggedIn ? <StyledLink className="iconLinks" onClick={props.signOut} to="/"> <FontAwesomeIcon icon={faSignOutAlt}/>Sign Out</StyledLink> : <StyledLink className="iconLinks defaultLinks"  secondary="false" to="/login">Sign In</StyledLink>}
        </StyledLi>
        {props.IsLoggedIn
        ? null 
        : <StyledLi>  <StyledLink className="iconLinks defaultLinks call-to-action" secondary={true} to="signup">Get Started</StyledLink> </StyledLi> 
        }
        {props.IsLoggedIn 
          ? <StyledLi> <StyledLink  className="iconLinks" to="/search"><FontAwesomeIcon icon={faSearch}/>Search</StyledLink> </StyledLi>
          : null 
        }
      </StyledUL> 
    </div>
  );
};

export default MobileMenu;

const StyledUL = S.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;
const StyledLi = S.li`
    list-style: none;
    margin: 0 2px;
    display: flex;
    align-items: center;
`;
const StyledLink = S(Link)`
    display: flex;
    text-transform: capitalize;
    align-items: center;
    font-size: 1.4rem;
    text-decoration: none;
    color: #fff;
`;