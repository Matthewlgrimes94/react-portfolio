import React, { useEffect } from 'react'
import M from "materialize-css";

export default function Navbar(props) {
    useEffect(() => {
        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    })

    return (
        <nav className="cyan lighten-3">
            <div className="nav-wraper">
                <a href=" "
                    data-target="mobile-show"
                    className="sidenav-trigger" >
                    <i className="fas fa-bars"></i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li className={(props.page === "home" ? "active" : " ")}>
                        <a href="/">Home</a>
                    </li>
                    <li className={(props.page === "portfolio" ? "active" : " ")}>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className={(props.page === "contact" ? "active" : " ")}>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/matthew-grimes-4b6911194/">
                            <i className="fab fa-linkedin linkedin-icon"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Matthewlgrimes94">
                            <i className="fab fa-github github-icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="sidenav" id="mobile-show">
                <li className={(props.page === "home" ? "active" : " ")}>
                    <a href="/">Home</a>
                </li>
                <li className={(props.page === "portfolio" ? "active" : " ")}>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li className={(props.page === "contact" ? "active" : " ")}>
                    <a href="/contact">Contact</a>
                </li>
                <li><a target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/matthew-grimes-4b6911194/">
                    <i className="fab fa-linkedin" id="linkedin-icon"></i>
                </a>
                </li>
                <li><a target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Matthewlgrimes94">
                    <i className="fab fa-github" id="github-icon"></i>
                </a>
                </li>
            </ul>
        </nav>

    )
}
