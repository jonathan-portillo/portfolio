import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const Footer = () => {
  return (
    <div className="footerNav">
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
  );
};

export default Footer;
