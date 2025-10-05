"use client";

import React, { ComponentProps } from "react";
import styled from "styled-components";

type Props = ComponentProps<"bar"> & {};
const Bar = ({children, ...rest}: Props) => {
    return (
        <StyledWrapper>
            <div className="button-container">
               {children}
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    background-color: #BC52D9;
    width: fit-content;
    height: 40px;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
          rgba(245, 73, 144, 0.5) 5px 10px 15px;
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .button:hover {
    transform: translateY(-3px);
  }

  .icon {
    font-size: 20px;
  }`;

export default Bar;
