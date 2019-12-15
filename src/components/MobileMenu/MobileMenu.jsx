import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faSignInAlt, faSignOutAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

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
      <Link to="/profile" className="iconLinks">
      <FontAwesomeIcon icon={faUser}/>
        Profile
      </Link>
      <div id="hamburgerMenuContainer" className={isMobileActive ? 'toggle-active' : null} onClick={handleClick}>
        {/* <div className="hamburger-menu">
          <span></span>
        </div> */}
        <FontAwesomeIcon icon={faPlus}/>
      </div>
      <Link to="/login" className="iconLinks">
      <FontAwesomeIcon icon={faSignInAlt}/>
        Login
      </Link>

    </div>
  );
};

export default MobileMenu;

