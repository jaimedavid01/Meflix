import React, { useEffect, useState } from 'react';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {

            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0"
                alt="Netflix logo"
            />

            <img
                className="nav__avatar"
                src="https://pbs.twimg.com/proflie_images/124011999041155"
                alt="Netflix logo"
            />
        </div>
    )
}

export default Nav;
