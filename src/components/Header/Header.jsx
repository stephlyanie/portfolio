// Styles
import "./Header.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import MainMenu from "../Menus/MainMenu";
import MenuDrawer from "../Menus/MenuDrawer";

function Header() {

  function isMobileWidth() {
    return window.innerWidth < 767;
  }

  const [isMobileScreen, setIsMobileScreen] = useState(isMobileWidth());
  const [headerNav, setHeaderNav] = useState();

  
    function handleWindowResize() {
      setIsMobileScreen(isMobileWidth());
    }

  useEffect(() => {

    if (isMobileWidth()) {
      setHeaderNav(<MenuDrawer className="site-header__menu" />)
    } else {
      setHeaderNav(<MainMenu className="site-header__menu" />)
    } 
  }, [isMobileScreen])

  window.addEventListener('resize', handleWindowResize);


  return (
    <header className="site-header">
      <Link to={`/`} className="site-header__logo">
        <h1>Stephanie Hall</h1>
      </Link>
      {headerNav}
    </header>
  );
}

export default Header;
