"use client";

import React, {ComponentProps, ReactNode} from "react";
import styled from "styled-components";
import {useRouter} from "next/navigation";
import {FaPlus} from "react-icons/fa";

type SummaryProps = {
    title: string;
    description: string;
    children: ReactNode;
    rout: string;
};

const Summary = ({title, description, children}: SummaryProps) => {
    const router = useRouter();
    return (
        <StyledWrapper>
            <div className="space-y-4 pb-4">
                <h1 className="bg-white rounded-md shadow-sm text-black text-2xl font-bold px-4 py-2">
                    {title}
                </h1>
                <div className="bg-white rounded-md shadow-sm p-4">
                    <p className="text-black text-base mb-4">
                        {description}
                    </p>
                    {children}
                    <div className="flex justify-end">
                        <div className="button-container">
                            <button className="button" title="inicio" onClick={() => router.push({rout})}>
                                <FaPlus className="icon" />
                                <span className="title">Saber Más</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .button-container {
        display: flex;
        background-color: #805BA6;
        width: fit-content;
        height: 40px;
        align-items: center;
        justify-content: space-around;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px,
        rgba(128, 91, 166, 0.5) 5px 10px 15px;
        padding: 5px;
        gap: 8px;
    }
    
    .button {
        outline: 0 !important;
        border: 0 !important;
        border-radius: 20px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #F2F2F2;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        padding: 0 10px;
    }
    .button:hover {
        width: 130px;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .icon {
        font-size: 20px;
        flex-shrink: 0;
        margin-right: 10px;
        z-index: 1;
    }
    .title {
        display: inline-block;
        white-space: nowrap;
        z-index: 1;
        font-size: 15px;
        font-family: "Arial", sans-serif;
    }
`

export default Summary;
