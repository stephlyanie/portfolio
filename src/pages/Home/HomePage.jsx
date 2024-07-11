// Styles
import "./HomePage.scss";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { projectList } from "../../api/projectsAPI";

function HomePage() {
  // Scrolls page to top on load
  window.scrollTo(0, 0);
  
  return (
    <section className="home">
      <section className="hero">
        <img
          src={require("../../assets/images/handwriting-hi.png")}
          className="hero__img"
        />
        <p className="hero__intro">
          I’m Stephanie — <br></br>
          I <span className="hero__intro--bold">design</span>. I <span className="hero__intro--bold">code</span>. I <span className="hero__intro--bold">write</span>.<br></br>
          I do communications.
        </p>
      </section>
      <section className="work">
        <h2 className="work__title">Recent Work</h2>
        <div className="work__projects-container">
          {projectList.map((projectList) => (
            <ProjectPreview data={projectList} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default HomePage;
