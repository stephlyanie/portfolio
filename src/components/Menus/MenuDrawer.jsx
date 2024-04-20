// Styles
import "./MenuDrawer.scss";

// React
import { useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// MUI
import { Button } from "@mui/base/Button";
import Drawer from '@mui/joy/Drawer';
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";

// Icons
import { ReactComponent as Burger } from "../../assets/icons/icon-menu.svg";

function MenuDrawer() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const mainNav = [
        {
          name: "Portfolio",
          icon: <Burger className="menu__nav-item-icon" />,
          url: "/portfolio",
        },
        {
          name: "Bio",
          icon: <Burger className="menu__nav-item-icon" />,
          url: "/bio",
        }
    ]

    return (
        <section className="menu">
            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                <Burger className="menu__icon" />
            </Button>
            <Drawer
                className="menu__drawer"
                open={open}
                onClose={() => setOpen(false)}
            >
                <ModalClose />
                <div className="menu__nav">
                    <List component="nav" className="menu__nav-list">
                        {mainNav.map((nav) => (
                            <ListItem key={nav.name} className="menu__nav-list-item">
                                <ListItemButton
                                    sx={{
                                        padding: "1rem 0.75rem",
                                    }}
                                    onClick={() => {
                                        navigate(`${nav.url}`);
                                        setOpen(false);
                                    }}
                                >
                                <ListItemDecorator>{nav.icon}</ListItemDecorator>
                                <p className="menu__nav-item-text">{nav.name}</p>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </section>
    )
};

export default MenuDrawer;