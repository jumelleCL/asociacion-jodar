import React, { ComponentProps } from "react";
type Props = ComponentProps<"div"> &{
  
};
const AdopcionPage= ({ ...rest}: Props) => {
  return (
      <div {...rest}></div>
  );
};



export default AdopcionPage;