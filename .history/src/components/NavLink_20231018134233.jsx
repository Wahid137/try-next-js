import Link from "next/link";
import React from "react";

const NavLink = ({ children, href, activeClassName, ...props }) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
