import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "./Search";
function Navbar() {
  const [openmenu, setOpenMenu] = useState(false);

  const [searchbar, setShowSearch] = useState(false);
  function toggleBtn() {
    console.log("clicked toggle");
    setOpenMenu(!openmenu);
    setShowSearch(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>
            <Link to="/">ForFoodies</Link>
          </h1>
        </div>
        <div className="menu-items">
          <ul className={`list-items ${openmenu ? "open" : ""}`}>
            <li>
              <Link to="/cookies">Cookies</Link>
            </li>
            <li>
              <Link to="/drinks">Soft Drinks</Link>
            </li>
            <li>
              <Link to="/chocolate">Choclates</Link>
            </li>
            <li>
              <Link to="/snacks">Snacks</Link>
            </li>
            <li>
              <Link to="/dairy">Dairy</Link>
            </li>
          </ul>
          <li>
            <Link to="/search">
              <i
                className="fas fa-magnifying-glass"
                onClick={() => setShowSearch(true)}
              ></i>
            </Link>
          </li>
          <li>
            <i className="fas fa-bars" onClick={toggleBtn}></i>
          </li>
        </div>
      </nav>
      {searchbar && openmenu === false && (
        <Search setShowSearch={setShowSearch} />
      )}
    </>
  );
}

export default Navbar;
