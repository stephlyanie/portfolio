// Styles
import "./ProjectPreview.scss";

import { Link } from "react-router-dom";

function ProjectPreview({ data }) {
  return (
    <div key={data.id} className="project-preview">
      <Link to={`/${data.id}/`}>
        <img src={data.imgURL} className="project-preview__img" />
      </Link>
      <div>
        <h3 className="project-preview__title">{data.name}</h3>
        <p className="project-preview__skills">{data.topSkills}</p>
        <br></br>
        <Link to={`/${data.id}/`} className="project-preview__btn">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ProjectPreview;
