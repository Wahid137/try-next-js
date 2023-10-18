import Link from "next/link";
import React from "react";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-center space-between">
        <h1 className="text-3xl font-semibold">Next Hero</h1>
        <ul className="flex items-center justify-center">
          {navLinks.map((navLink) => (
            <li className="mx-2" key={navLink.path}>
              <Link href={navLink}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
