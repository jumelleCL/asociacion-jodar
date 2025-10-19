'use client';
import React, {ComponentProps} from 'react';
import styled from 'styled-components';

type Props = ComponentProps<"div"> & {};
const LogoHover = () => {
    return (
        <StyledWrapper>
            <div className="logo">
                <img src="/logo.jpg" alt="Logo" width={50} height={50} />
            </div>    
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`

    .logo {
        width: 150px;
        height: auto;
    }
    
`;

export default LogoHover;