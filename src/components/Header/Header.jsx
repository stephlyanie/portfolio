// Styles
import "./Header.scss";

import MenuDrawer from "../Menus/MenuDrawer";

function Header() {
    return (
        <header className="site-header">
            <img src={require("../../assets/images/logo.png")} className="site-header__logo" />

            {/* Drawer Nav Component */}
            <section className="site-header__nav">
                <MenuDrawer />
            </section>
        </header>
    )
};

export default Header;
