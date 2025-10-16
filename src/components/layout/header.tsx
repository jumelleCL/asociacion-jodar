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
            className="w-full bg-white shadow-2xl shadow-[#805BA6] py-4 px-8 flex justify-between items-center relative z-10" title={"logo"} onClick={() => router.push("/")}>
            <div className="mx-20 flex items-center">
                <LogoHover />
                <h1 className="text-3xl font-bold text-[#805BA6] tracking-wide">
                    7 RAZONES
                </h1>
            </div>
            <Bar>
                <button className="button" title="inicio" onClick={() => router.push("/admin/dashboard")}>
                    <FaHome className="icon" />
                    <span className="title">Inicio</span>
                </button>
                <button className="button" title="buscar" onClick={() => router.push("/animal")}>
                    <FaSearch className="icon" />
                    <span className="title">Buscar</span>
                </button>
                <button className="button" title="contact" onClick={() => router.push("/contact")}>
                    <GrContact className="icon" />
                    <span className="title">Contacto</span>
                </button>
            </Bar>
        </header>
    );
};



export default Header;