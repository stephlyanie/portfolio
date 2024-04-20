import MenuDrawer from "../Menus/MenuDrawer";

function Header() {
    return (
        <header className="site-header">
            {/* Drawer Nav Component */}
            <section className="site-header__nav">
                <MenuDrawer />
            </section>
        </header>
    )
};

export default Header;
