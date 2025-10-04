import Button from "@/components/ui/Button";
import React, { ComponentProps } from "react";
type Props = ComponentProps<"div"> &{
  
};
const AdminDashboardPage= ({ ...rest}: Props) => {
  return (
      <div className="flex min-h-screen flex-col items-center" {...rest}>
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">Dashboard</h1>
          <div>
            <Button>New animal</Button>
            <Button>searchh</Button>
          </div>
            <div>
                Animals card...
            </div>
      </div>
  );    
};



export default AdminDashboardPage;