import React from 'react';
import S from 'styled-components';
import AppLogoImage from './AppLogoImage.svg';
import {Link} from 'react-router-dom';


const Logo = () => {
    return(
        <StyledLink to="/">
            <LogoContainerDiv>
                <StyledLogo></StyledLogo>
            </LogoContainerDiv>
        </StyledLink>
    );
}
export default Logo;
    const LogoContainerDiv = S.div`


    `;
const StyledLogo = S.div`
    background-image: url(${AppLogoImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100px;
    width: 100px;
`;
const StyledLink = S(Link)`
    text-decoration: none;
`;