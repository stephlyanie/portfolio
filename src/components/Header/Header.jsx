// Styles
import "./Header.scss";

import MenuDrawer from "../Menus/MenuDrawer";

function Header() {
    return (
        <header className="site-header">
            {/* Logo */}
            <div className="site-header__logo"></div>
            {/* Drawer Nav Component */}
            <section className="site-header__nav">
                <MenuDrawer />
            </section>
        </header>
    )
};

export default Header;
