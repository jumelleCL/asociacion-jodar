import React, {ComponentProps} from "react";
import RRSS from "../ui/RRSS";
type Props = ComponentProps<"footer"> &{
    
    
};


const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 py-6 px-8 mt-10 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
                <RRSS/>
            </div>
        </footer>
    );
};

export default Footer;
