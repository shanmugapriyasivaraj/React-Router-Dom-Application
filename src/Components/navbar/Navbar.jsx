import React, { useState } from "react";
import "./Navbar.css";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h1>Secured</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/recoverypage"}>Recovery</Link>
          </li>
          <li>
            <Link to={"/cloudpage"}>Cloud</Link>
          </li>
          <li>
            <Link to={"/contactpage"}>Contact</Link>
          </li>
          <button>Sign In</button>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
