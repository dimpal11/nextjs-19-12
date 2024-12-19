import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = () => {
  // Declare and initialize the links array with objects containing `path` and `title`.
  const links = [
    { path: "/home", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
