import React, { ComponentProps } from "react";
import Button from "../ui/Button"
import LogoHover from "../ui/logohover"
type Props = ComponentProps<"header"> &{

};
const Header= ({ ...rest}: Props) => {
    return (
        <header
            className="w-full bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center"
        >
            <LogoHover />
            <h1 className="text-3xl font-bold text-purple-400 tracking-wide">
                7 RAZONES
            </h1>

            <nav className="flex space-x-6">
                <Button as="a" href="#">
                    Inicio
                </Button>
                <Button as="a" href="#">
                    Servicios
                </Button>
                <Button as="a" href="#">
                    Contacto
                </Button>
            </nav>
        </header>
    );
};



export default Header;