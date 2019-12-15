import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faCompass, faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./MobileMenu.css";

const MobileMenu = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  const handleClick = () => {
    if(isMobileActive === true) {
      setIsMobileActive(false);
    } else if(isMobileActive === false) {
        setIsMobileActive(true);
    }

  }
  return (
    <div className="hamburgerWrapper">
      <Link to ="/"  className="iconLinks">
        {/* <i className="fas fa-home"></i>
        */}
        <FontAwesomeIcon icon={faHome}/>
        Home 
      </Link>
      <Link to="/discover" className="iconLinks">
      <FontAwesomeIcon icon={faCompass}/>
        Profile
      </Link>
      <div id="hamburgerMenuContainer" className={isMobileActive ? 'toggle-active' : null} onClick={handleClick}>
        {/* <div className="hamburger-menu">
          <span></span>
        </div> */}
        <FontAwesomeIcon icon={faPlus}/>
      </div>
      <Link to="/discover" className="iconLinks">
      <FontAwesomeIcon icon={faStar}/>
        Login
      </Link>
      <Link to="/login" className="iconLinks">
      <FontAwesomeIcon icon={faUser}/>
        Sign Up
      </Link>
    </div>
  );
};

export default MobileMenu;

