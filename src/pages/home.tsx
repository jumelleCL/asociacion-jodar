import React, { ComponentProps } from "react";
type Props = ComponentProps<"div"> &{
  
};
const HomePage= ({ ...rest}: Props) => {
  return (
      <div {...rest}></div>
  );
};



export default HomePage;