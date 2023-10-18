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
];

const Sidebar = () => {
  return (
    <div>
      <aside>
        <h1>Dashboard</h1>
        <ul>
          {navLinks.map(({ path, title }) => (
            <li key={path}>{title}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
