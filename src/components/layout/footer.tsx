"use client";

import React, {ComponentProps} from "react";
import Bar from "../ui/Bar";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
type Props = ComponentProps<"footer"> &{
    
    
};


const Footer = () => {
    return (
        <footer className="w-full bg-[#F2F2F2] py-6 px-8 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-[#805BA6] text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
                <Bar>
                    <button className="button" title="facebook" onClick={() => window.open("https://www.facebook.com/share/1ATuhNaV3z/")}>
                        <FaFacebook className="icon" />
                        <span className="title">Facebook</span>
                    </button>
                    <button className="button" title="instagram" onClick={() => window.open("https://www.instagram.com/asociacionfelinosprotegidos?igsh=NmVzNGd5NzE4c2Uw")}>
                        <TiSocialInstagram className="icon" />
                        <span className="title">Instagram</span>
                    </button>
                </Bar>
            </div>
        </footer>
    );
};

export default Footer;
