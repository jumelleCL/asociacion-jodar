'use client';
import React, {ComponentProps} from 'react';
import styled from 'styled-components';

type Props = ComponentProps<"logohover"> & {};
const LogoHover = () => {
    return (
        <StyledWrapper>
            <div className="btn">
                <img src="/logo-bgremove.png" alt="Logo" width={50} height={50} />
            </div>    
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .btn {
    display: grid;
    place-items: center;
    background: whitesmoke;
    padding: 0px;
    border-radius: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
  	      -6px -6px 10px -1px rgba(255,255,255,0.7);
    border: 1px solid rgba(0,0,0,0);
    cursor: pointer;
    transition: transform 0.5s;
  }

  .btn:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
  	      inset -4px -4px 6px -1px rgba(255,255,255,0.7),
  	      -0.5px -0.5px 0px rgba(255,255,255,1),
  	      0.5px 0.5px 0px rgba(0,0,0,0.15),
  	      0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.1);
  }

  .btn img {
    transition: transform 0.5s;
  }

  .btn:hover img {
    transform: scale(0.9);
  }
`;

export default LogoHover;