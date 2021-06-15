import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top" >
        <div class="container">
          <Link class="navbar-brand" to="/">
            Chengang Zhang
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/cv" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/cv">
                  CV
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/photography" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/photography">
                  Photography
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);