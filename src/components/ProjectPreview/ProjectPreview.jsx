// Styles
import "./ProjectPreview.scss";

import { Link } from "react-router-dom";

function ProjectPreview({ data }) {
  return (
      <div key={data.id} className="project-preview">
        <div>
          <img src={data.thumbnail.url} className="project-preview__img" alt={data.thumbnail.altText} />
          <h3 className="project-preview__title">{data.projectName}</h3>
          <p className="project-preview__skills">{data.topSkills}</p>
        </div>
        <Link to={`/projects/${data.id}/`}>
          <div className="button project-preview__btn">
            Learn More
          </div>
        </Link>
      </div>
  );
}

export default ProjectPreview;
