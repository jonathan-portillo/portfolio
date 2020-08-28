import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navLinks">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">My Projects</NavLink>
      <NavLink to="/skills">My Skills</NavLink>
      <NavLink to="/about">About Me</NavLink>
    </div>
  );
};

export default Navbar;
