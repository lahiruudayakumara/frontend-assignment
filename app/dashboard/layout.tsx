import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full">
      <div className=" ">
        {children}
        </div>
    </div>
  );
};

export default layout;
