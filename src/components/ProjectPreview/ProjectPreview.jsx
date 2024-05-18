// Styles
import "./ProjectPreview.scss";

import { Link } from "react-router-dom";

function ProjectPreview({ data }) {
  return (
    <div key={data.id} className="project-preview">
      <Link to={`/${data.id}/`}>
        <img src={data.thumbnail.url} className="project-preview__img" alt={data.thumbnail.altText} />
      </Link>
      <div>
        <h3 className="project-preview__title">{data.name}</h3>
        <p className="project-preview__skills">{data.topSkills}</p>
        <br></br>
        <Link to={`/${data.id}/`} className="button project-preview__btn">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ProjectPreview;
