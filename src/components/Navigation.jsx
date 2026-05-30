import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Chengang Zhang
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  location.pathname === "/cv" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/cv">
                  CV
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  location.pathname === "/photography" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/photography">
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

export default Navigation;
