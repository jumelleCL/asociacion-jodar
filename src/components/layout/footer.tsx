"use client";

import React, {ComponentProps} from "react";
import Bar from "../ui/Bar";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
type Props = ComponentProps<"footer"> &{
    
    
};


const Footer = () => {
    return (
        <footer className="w-full bg-[#BC52D9] py-6 px-8 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-white text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
                <Bar>
                    <button className="button" title="facebook" onClick={() => window.open("https://www.facebook.com/share/1ATuhNaV3z/")}>
                        <FaFacebook className="icon" />
                    </button>
                    <button className="button" title="instagram" onClick={() => window.open("https://www.instagram.com/asociacionfelinosprotegidos?igsh=NmVzNGd5NzE4c2Uw")}>
                        <TiSocialInstagram className="icon" />
                    </button>
                </Bar>
            </div>
        </footer>
    );
};

export default Footer;
