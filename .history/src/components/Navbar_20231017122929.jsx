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
      <nav className="flex items-center container mx-auto justify-between">
        <h1 className="text-3xl font-semibold">Next Hero</h1>
        <ul className="flex items-center justify-center">
          {navLinks.map(({ path, title }) => (
            <li className="mx-2" key={path}>
              <Link href={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
