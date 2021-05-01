import React, { useEffect, useState } from "react";
import "./Nav.css";
import Logo from './img/Meflix.png'
import User from './img/user.png'

function Nav() {
  const [show, handleShow] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);
  
  return (
    //  let a = true;
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src={Logo}
        className="nav_logo"
        alt="netflix logo"
      />
      <img
        className="nav_avatar"
        alt="nav_avatar"
        src={User}
      />
      <div>

      </div>
    </div>
  );
}

export default Nav;
