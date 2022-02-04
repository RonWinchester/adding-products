import React from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../../constants/constants";

function Header() {
  const location = useLocation();
  return (
    <header className="alignment header">
      <nav className="navigation">
        {links.map((link, index) => (
          <Link
            key={index}
            className={`link navigation__link ${
              location.pathname === link.link
                ? "navigation__link_active"
                : ""
            }`}
            to={link.link}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
