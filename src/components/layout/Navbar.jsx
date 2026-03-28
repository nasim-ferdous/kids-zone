"use client";
import React from "react";
import Logo from "./Logo";
import NavLinks from "../buttons/NavLinks";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import AuthButtons from "../buttons/AuthButtons";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLinks href={"/"}>Home</NavLinks>
      </li>
      <li>
        <NavLinks href={"/products"}>Products</NavLinks>
      </li>
      <li>
        <NavLinks href={"/blogs"}>Blogs</NavLinks>
      </li>
      <li>
        <NavLinks href={"/contact"}>Contact</NavLinks>
      </li>
    </>
  );

  return (
    <header className=" w-full px-2 lg:px-4 py-2">
      <div className="navbar bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl lg:rounded-full transition-all duration-300 ">
        {/* Navbar Start: Mobile Menu + Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-4 w-52 p-4 shadow-2xl border border-base-200"
            >
              {nav}
            </ul>
          </div>
          <div className="transform scale-90 md:scale-100">
            <Logo />
          </div>
        </div>

        {/* Navbar Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">{nav}</ul>
        </div>

        {/* Navbar End: Fixed Overlap Issue */}
        <div className="navbar-end gap-2 md:gap-4">
          <Link
            href={"/cart"}
            className="btn btn-primary btn-sm md:btn-md btn-circle lg:rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <LuShoppingCart className="text-lg" />
          </Link>

          <div className="flex-shrink-0 scale-95 md:scale-100">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
