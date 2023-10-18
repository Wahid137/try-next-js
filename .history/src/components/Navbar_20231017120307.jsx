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
  return <div>
    <nav>
        <h1>Next Hero</h1>
        <ul>
            {
                navLinks.map((navLink) => <li
                    key=
                >{navLink.title}</li>)
            }
        </ul>
    </nav>
  </div>;
};

export default Navbar;
