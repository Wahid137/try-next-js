import NavLink from "@/components/NavLink";
import Link from "next/link";
import React from "react";
const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <div>
      <aside className="mr-10">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ul>
          {navLinks.map(({ path, title }) => (
            <li className="my-2" key={path}>
              <NavLink activeClassName="text-blue-500" href={path}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
