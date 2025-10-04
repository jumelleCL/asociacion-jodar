import React, { ComponentProps } from "react";
type Props = ComponentProps<"div"> &{
  
};
const SobreNosotrosPage= ({ ...rest}: Props) => {
  return (
      <div {...rest}></div>
  );
};



export default SobreNosotrosPage;