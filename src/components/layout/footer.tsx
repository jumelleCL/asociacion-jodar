import React, { ComponentProps } from "react";
import Button from "../ui/Button"
type Props = ComponentProps<"div"> &{

};
const Footer= ({ ...rest}: Props) => {
    return (
        <div className="flex min-h-screen flex-col items-center">
            Footer
        </div>
    );
};



export default Footer;