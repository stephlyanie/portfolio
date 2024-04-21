// Styles
import "./Header.scss";

import MenuDrawer from "../Menus/MenuDrawer";

function Header() {
    return (
        <header className="site-header">
            <h1 className="site-header__logo">Stephanie Hall</h1>

            {/* Drawer Nav Component */}
            {/* <section className="site-header__nav">
                <MenuDrawer />
            </section> */}
        </header>
    )
};

export default Header;
