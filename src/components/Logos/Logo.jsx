import React,{useContext} from 'react';
import S from 'styled-components';
import AppLogoImage from './Logo.svg';
import {Link} from 'react-router-dom';
import AppContext from '../../context';


const Logo = () => {
    const darkMode = useContext(AppContext);
    return(
        <StyledLink to="/">
            <LogoContainerDiv>
                <StyledLogo></StyledLogo>
                <LogoText primary={darkMode}>Friendlier</LogoText>
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
const LogoText = S.p`
    font-size: 2rem;
    text-align: center;
    color: ${props => props.primary ? '#fff' : '#000'};
`;