import React from "react";
import { Link, NavLink } from "react-router-dom";

import homeImage from "../../Assets/Images/homepageImg.png";
import "../../index";
import "../Homepage/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div class="grid-left mg-sm">
        <h1 className="heading-h1">Lorem ipsum dolor sit amet</h1>
        <p className="para-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <Link to="/notes">
          <button class="btn box-shadow btn-primary">Create Note</button>
        </Link>
      </div>
      <img className="homepage-cover" src={homeImage} alt="homepage image" />
    </div>
  );
};
export { Homepage };
