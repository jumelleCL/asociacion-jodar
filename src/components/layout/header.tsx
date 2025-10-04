import React, { ComponentProps } from "react";
import Button from "../ui/Button"
type Props = ComponentProps<"header"> &{

};
const Header= ({ ...rest}: Props) => {
    return (
        <header
            className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center"
        >
            <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
                7 RAZONES
            </h1>
                        
            <nav className="space-x-6">
                <a href="#" className="text-gray-600 hover:text-black transition">
                    Inicio
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition">
                    Servicios
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition">
                    Contacto
                </a>
            </nav>
        </header>
    );
};



export default Header;