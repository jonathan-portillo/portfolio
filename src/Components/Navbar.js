import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navLinks">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink color="inherit" to="/">
            Home
          </NavLink>
          <NavLink color="inherit" to="/projects">
            My Projects
          </NavLink>
          <NavLink color="inherit" to="/skills">
            My Skills
          </NavLink>
          <NavLink color="inherit" to="/about">
            About Me
          </NavLink>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Navbar;
