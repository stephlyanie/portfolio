// Styles
import "./HomePage.scss";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { projectList } from "../../api/projectsAPI";

import { useState } from "react";
import { Link } from "react-router-dom";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

function HomePage() {
  // Scrolls page to top on load
  window.scrollTo(0, 0);

  const [projectsToDisplay, setProjectsToDisplay] = useState(projectList.slice(0,4));

  return (
    <section className="home">
      <section className="hero">
        <img
          src={require("../../assets/images/handwriting-hi.png")}
          className="hero__img"
        />
        <p className="hero__intro">
          I’m Stephanie — <br></br>I{" "}
          <span className="hero__intro--bold">design</span>. I{" "}
          <span className="hero__intro--bold">code</span>. I{" "}
          <span className="hero__intro--bold">write</span>.<br></br>I do
          communications.
        </p>
        <ArrowDropDown sx={{fill: "#fdfdff"}} />
      </section>
      <section className="filters">
        <div className="filters__triangle-up"></div>
        <div className="filters__container">
          <Link 
            to="/projects"
            state={{ filterToApply: "code" }}
            className="filters__button"
          >
            Code
          </Link>
          <Link
            to="/projects"
            state={{ filterToApply: "design" }}
            className="filters__button"
          >
            Design
          </Link>
          <Link
            to="/projects"
            state={{ filterToApply: "writing" }}
            className="filters__button"
          >
            Writing
          </Link>
          <Link
            to="/projects"
            state={{ filterToApply: "communications" }}
            className="filters__button"
          >
            Communications
          </Link>
        </div>
        <div className="filters__triangle-down"></div>
      </section>
      <section className="work">
        <h2 className="work__title">Recent Work</h2>
        <div className="work__projects-container">
          {projectsToDisplay.map((project) => {
              return <ProjectPreview data={project} />;
            })}
        </div>
        <Link to="/projects" className="work__button">
          <p>Explore More</p>
        </Link>
      </section>
    </section>
  );
}

export default HomePage;