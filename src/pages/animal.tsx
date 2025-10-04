import React, { ComponentProps } from "react";
type Props = ComponentProps<"div"> &{
  
};
const AnimalPage= ({ ...rest}: Props) => {
  return (
      <div></div>
  );
};



export default AnimalPage;