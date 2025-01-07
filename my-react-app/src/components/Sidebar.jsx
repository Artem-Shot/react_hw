import React from "react";

function Sidebar() {
    return (
        <ul className="nav flex-column">
            <li>
                <a className="nav-link active" href="#home">Home</a>
            </li>
            <li>
                <a className="nav-link" href="#about">About</a>
            </li>
            <li>
                <a className="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    );
}

export default Sidebar;