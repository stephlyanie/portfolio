// Styles
import "./MainMenu.scss";

import { useNavigate } from "react-router-dom";

function MainMenu() {

    const navigate = useNavigate();

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li
          className="menu__link"
          onClick={() => {
            navigate(`/projects`);
          }}
        >
          Projects
        </li>
        {/* <li
          className="menu__link"
          onClick={() => {
            navigate(`/bio`);
          }}
        >
            Bio
        </li> */}
      </ul>
    </nav>
  );
}

export default MainMenu;
