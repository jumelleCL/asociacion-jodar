"use client";

import React, { ComponentProps } from "react";
import Bar from "../ui/Bar"
import LogoHover from "../ui/logohover"
import { FaHome, FaSearch } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { useRouter } from "next/navigation";
type Props = ComponentProps<"header"> &{

};
const Header= ({ ...rest}: Props) => {
    const router = useRouter();

    return (
        <header
            className="w-full bg-[#BC52D9] shadow-md py-4 px-8 flex justify-between items-center"
        >
            <LogoHover />
            <h1 className="text-3xl font-bold text-[#E7BDF2] tracking-wide">
                7 RAZONES
            </h1>
            <Bar>
                <button className="button" title="inicio" onClick={() => router.push("/admin/dashboard")}>
                    <FaHome className="icon" />
                </button>
                <button className="button" title="buscar" onClick={() => router.push("/animal")}>
                    <FaSearch className="icon" />
                </button>
                <button className="button" title="contact" onClick={() => router.push("/contact")}>
                    <GrContact className="icon" />
                </button>
                
            </Bar>
        </header>
    );
};



export default Header;