import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../Header/Header.css";
import { LogoutIcon } from "../../Assets/Svg/allsvg";

const Header = () => {
  return (
    <nav className="navigation-container">
      <div className="nav-brand title-theme">
        <Link to="/">Falcon Note</Link>
      </div>
      <LogoutIcon className="right-nav-img" />

      {/* <li className="list-item list-non-bullet">
        <NavLink to="/">SIGN UP</NavLink>
      </li> */}
    </nav>
  );
};

export { Header };
