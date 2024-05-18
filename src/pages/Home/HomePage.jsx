// Styles
import "./HomePage.scss";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { projectList } from "../../api/projectsAPI";

function HomePage() {
  return (
    <section className="home">
      <section className="hero">
        <img
          src={require("../../assets/images/handwriting-hi.png")}
          className="hero__img"
        />
        <p className="hero__intro">
          I’m Stephanie — <br></br>
          <span className="hero__intro--bold">designer</span> and{" "}
          <span className="hero__intro--bold">developer</span> <br></br>
          with project management <br></br>
          and writing acumen.
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
