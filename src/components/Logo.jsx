import React from 'react';
import S from 'styled-components';


const Logo = () => {
    return(
        <div>
            <StyledH1>Mentorship</StyledH1>
        </div>
    );

}
export default Logo;

const StyledH1 = S.h1`
    font-size: 3rem;
    color: #000;
    text-transform: uppercase;
    font-style: italic;
`;