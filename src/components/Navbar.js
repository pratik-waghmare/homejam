import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./../assets/images/logo.png";
import "./Navbar.scss";

function NavLink(props) {
  if (props.link.isToggle) {
    return (
      <li>
        <img
          src={props.link.icon}
          alt={props.link.name}
          className="icon--link"
          onClick={props.link.hasToggleHandler ? props.toggleHandler : null}
        />
      </li>
    );
  }

  if (props.link.type === "icon-link") {
    return (
      <li>
        <Link to={props.link.url} className="icon--link">
          <img
            src={props.link.icon}
            alt={props.link.name}
            onClick={props.link.hasToggleHandler ? props.toggleHandler : null}
          />
        </Link>
      </li>
    );
  }

  if (props.link.type === "icon-text-link") {
    return (
      <li>
        <Link to={props.link.url} className="icon--text--link">
          <img src={props.link.icon} alt={props.link.name} />
          <span>{props.link.name}</span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={props.link.url}
        onClick={props.link.hasToggleHandler ? props.toggleHandler : null}
      >
        {props.link.name}
      </Link>
    </li>
  );
}

function Sidebar({ isOpen, iconLinks, sidebarLinks, toggleHandler }) {
  const linkWrapperClasses = ["linkWrapper"];
  if (isOpen) {
    linkWrapperClasses.push("open");
  } else {
    linkWrapperClasses.push("close");
  }

  return (
    <div className="Sidebar">
      {isOpen && <div className="Overlay" onClick={toggleHandler}></div>}
      <div className="header">
        <div className="logoContainer">
          <Link to="/">
            <img src={Logo} alt="Homejam-logo" className="logo" />
          </Link>
        </div>
        <ul>
          {iconLinks.map((link) => (
            <NavLink key={link.id} link={link} toggleHandler={toggleHandler} />
          ))}
        </ul>
      </div>
      {isOpen && (
        <div className={linkWrapperClasses.join(" ")}>
          <ul>
            {sidebarLinks.map((link) => (
              <NavLink link={link} toggleHandler={toggleHandler} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Navbar({ sidebarLinks, navbarLinks, iconLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav>
      <Sidebar
        isOpen={isOpen}
        iconLinks={iconLinks}
        sidebarLinks={sidebarLinks}
        toggleHandler={toggleHandler}
      />
      <div className="Navbar">
        <div className="logoContainer">
          <Link to="/">
            <img src={Logo} alt="Homejam-logo" className="logo" />
          </Link>
        </div>
        <div className="linkWrapper">
          <ul>
            {navbarLinks.map((link) => (
              <NavLink key={link.id} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
