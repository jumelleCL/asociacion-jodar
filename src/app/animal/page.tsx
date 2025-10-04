import React, { ComponentProps } from "react";
type Props = ComponentProps<"div"> &{
  
};
const AnimalPage= ({ ...rest}: Props) => {
  return (
      <div>oli uwu</div>
  );
};



export default AnimalPage;