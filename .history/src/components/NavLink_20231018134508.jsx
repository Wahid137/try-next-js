"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href, activeClassName, ...props }) => {
  const path = usePathname();

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
