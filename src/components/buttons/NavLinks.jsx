"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, children }) => {
  const path = usePathname();

  // Check if active:
  // 1. If href is "/", path must be exactly "/"
  // 2. Otherwise, check if the current path starts with href
  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
      className={`${isActive ? "text-primary font-bold" : "text-base-content"} font-medium transition-colors`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
