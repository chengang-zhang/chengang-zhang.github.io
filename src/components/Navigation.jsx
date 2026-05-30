import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/cv", label: "CV" },
    { path: "/photography", label: "Photography" },
  ];

  return (
    <header className="site-header">
      <nav className="container site-nav" aria-label="Primary navigation">
        <Link className="site-brand" to="/">
          Chengang Zhang
        </Link>

        <ul className="site-nav-list">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`site-nav-link${isActive ? " active" : ""}`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
