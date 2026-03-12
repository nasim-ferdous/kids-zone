import Logo from "@/components/layout/Logo";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      <h1 className="text-6xl font-bold animate-pulse">Loading</h1>
      <Logo className="animate-ping"></Logo>
    </div>
  );
};

export default loading;
