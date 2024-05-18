// Styles
import "./Header.scss";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to={`/`} className="site-header__logo">
        <h1>Stephanie Hall</h1>
      </Link>
    </header>
  );
}

export default Header;
