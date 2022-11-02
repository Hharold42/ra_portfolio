import React, { useReducer, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import "./navbar.scss";

const NavBar = () => {
  const [active, toggle] = useReducer((current) => !current, false);
  const [scroll, setScroll] = useState(false)
  const handleScroll = () => window.scrollY >= 1 ? setScroll(true) : setScroll(false);

  useEffect(() => {
    console.log("new render(");
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scroll ? "header --scrolled" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={active ? "nav-menu" : "nav-menu --closed"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
      </ul>
      <div className="hamburger">
        {active ? (
          <FaTimes size={20} style={{ color: "wheat" }} onClick={ () => toggle() }/>
        ) : (
          <FaBars size={20} style={{ color: "wheat" }} onClick={ () => toggle() }/>
        )}
      </div>
    </div>
  );
};

export default NavBar;
