"use client";
import Link from "next/link";
import React from "react";
import { BiSolidError } from "react-icons/bi";

const error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      <BiSolidError size={100} className="text-primary" />
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <Link href={"/"} className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default error;
