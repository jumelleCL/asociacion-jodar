import React, { ComponentProps } from "react";
type Props = ComponentProps<"button"> &{
  
};
const Button= ({ children, ...rest}: Props) => {
  return (
      <button className="m-10 bg-blue-700 text-white rounded-md px-4 py-2" {...rest}> {children}</button>
  );
};



export default Button;