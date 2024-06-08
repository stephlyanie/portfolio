// Styles
import "./RelatedProject.scss";

import { Link } from "react-router-dom";

function RelatedProject({ data }) {
  return (
    <Link to={`/${data.id}/`} key={data.id} className="related-project">
        <img src={data.thumbnail.url} className="related-project__img" alt={data.thumbnail.altText} />
        <h4 className="related-project__title">{data.projectName}</h4>
    </Link>
  );
}

export default RelatedProject;
