import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../routes/Routes";

const Nav = () => {
  return (
    <header>
      <Link to={appRoutes.home.path}>Home</Link>
      <a href={appRoutes.settings.path}>Settings</a>
      <a href={appRoutes.profile.path}>Profile</a>
    </header>
  );
};

export default Nav;
