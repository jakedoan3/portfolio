import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const links = [
    {
      key: "About Me",
      route: "/about",
      placeholder: "About Me",
    },
    {
      key: "Portfolio",
      route: "/portfolio",
      placeholder: "Portfolio",
    },
    {
      key: "Contact",
      route: "/contact",
      placeholder: "Contact",
    },
    {
      key: "Music",
      route: "/music",
      placeholder: "Music",
    },
  ];

  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/"}>
        Jake Doan
      </Link>
      <div className="NavLink">
        {links.map((link) => {
          const {
            key,
            route,
            placeholder,
            onClick = () => {},
          } = link;
          
          return (
            <div key={key}>
              <Link to={route} onClick={onClick}>
                {placeholder}
              </Link>
            </div>
          );
          
        })}
      </div>
    </div>
  );
};

export default Navbar;