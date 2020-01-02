import React from 'react';
import S from 'styled-components';
import AppLogoImage from './AppLogoImage.svg';
import {Link} from 'react-router-dom';


const Logo = () => {
    return(
        <StyledLink to="/">
            <LogoContainerDiv>
                <StyledLogo src={AppLogoImage}/>
            </LogoContainerDiv>
        </StyledLink>
    );
}
export default Logo;
    const LogoContainerDiv = S.div`


    `;
const StyledLogo = S.img`
    width: 75px;
`;
const StyledLink = S(Link)`
    text-decoration: none;
`;