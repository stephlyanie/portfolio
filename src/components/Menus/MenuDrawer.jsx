// Styles
import "./MenuDrawer.scss";

// React
import { useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// MUI
import { Button } from "@mui/base/Button";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";

// Icons
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import Cottage from "@mui/icons-material/Cottage";
import Menu from "@mui/icons-material/Menu";
import SentimentVerySatisfied from "@mui/icons-material/SentimentVerySatisfied";

function MenuDrawer() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const mainNav = [
    {
      name: "Home",
      icon: <Cottage className="menu__nav-item-icon" sx={{fill: "#6a6282"}} />,
      url: "/",
    },
    {
      name: "Projects",
      icon: <AutoAwesome className="menu__nav-item-icon" sx={{fill: "#6a6282"}} initialFilter={`all`} />,
      url: "/projects",
    },
    // {
    //   name: "Bio",
    //   icon: <SentimentVerySatisfied className="menu__nav-item-icon" sx={{fill: "#6a6282"}} />,
    //   url: "/bio",
    // },
  ];

  return (
    <nav className="menu-drawer">
      <Button
        onClick={() => setOpen(true)}
        className="menu-drawer__open-nav-button"
      >
        <Menu
          className="menu-drawer__icon"
          sx={{
            height: "2rem",
            width: "2rem",
            fill: "#fdfdff",
          }}
        />
      </Button>
      <Drawer
        className="menu-drawer__drawer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalClose />
        <div className="menu-drawer__nav">
          <List component="nav" className="menu-drawer__nav-list">
            {mainNav.map((nav) => (
              <ListItem key={nav.name} className="menu-drawer__nav-list-item">
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
                  <p className="menu-drawer__nav-item-text">{nav.name}</p>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
}

export default MenuDrawer;
