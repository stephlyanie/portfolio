import "./SingleProjectPage.scss";
import { projectList } from "../../api/projectsAPI";

import { useParams, Link } from "react-router-dom";

import AccordionItem from "../../components/AccordionItem/AccordionItem";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";

import AccordionGroup from "@mui/joy/AccordionGroup";

function SingleProjectPage() {
  // Scrolls page to top on load
  window.scrollTo(0, 0);

  // Captures challenge id from url and saves in variable
  const { projectPageId } = useParams();

  // Stores data of single challenge or creation from axios call to database
  const projectObj = projectList.find(
    (project) => project.id === `${projectPageId}`
  );

  return (
    <section className="project">
      <img
        src={projectObj.thumbnail.url}
        alt={projectObj.thumbnail.altText}
        className="project__image"
      />
      <div className="project__details">
        <h1 className="project__title">{projectObj.projectName}</h1>
        <h2 className="project__heading">
          {projectObj.role} |{" "}
          {projectObj.type === "Freelance" ? projectObj.type : projectObj.client}
        </h2>
        {projectObj.skillLogos ? (
          <div className="project__skill-logos-container">
            {projectObj.skillLogos.map((skillLogo) => {
              return (
                <img
                  src={skillLogo.url}
                  alt={skillLogo.altText}
                  key={skillLogo.altText}
                  className="project__skill-logo"
                />
              );
            })}
          </div>
        ) : null}
      </div>
      {projectObj.projectURL ? (
        <a
          href={projectObj.projectURL}
          className="button button__featured project__button"
          target="_blank"
        >
          Visit Project
        </a>
      ) : null}
      <div className="project__details">
        <h3 className="project__subheading">Status</h3>
        <p className="project__detail">{projectObj.status}</p>
        <h3 className="project__subheading">Launch Date</h3>
        <p className="project__detail">{projectObj.launchDate}</p>
        <h3 className="project__subheading">Skills</h3>
        <ul className="project__skill-list">
          {projectObj.skills.map((skill) => {
            return (
              <li key={skill} className="project__skill">
                {skill}
              </li>
            );
          })}
        </ul>
        <h3 className="project__subheading">Project Description</h3>
        <p className="project__detail">{projectObj.challenge}</p>
        <p className="project__detail">{projectObj.solution}</p>
        <p className="project__detail">{projectObj.roleIntro}</p>
        <p className="project__detail">{projectObj.outcomes}</p>
      </div>
      <div className="project__accordion">
        <AccordionGroup
          variant="plain"
          disableDivider
          sx={{
            ml: -1.5,
            mb: 3,
            bgColor: "white",
            marginLeft: "0",
            width: "100%",
          }}
        >
          <AccordionItem
            title={"Learn More About my Role"}
            details={
              <div>
                <p className="project__detail-accordion">In my role, I:</p>
                <ul className="project__detail-list">
                  {projectObj.roleList.map((roleListItem) => {
                    return (
                      <li
                        className="project__detail-list-item"
                        key={roleListItem}
                      >
                        {roleListItem}
                      </li>
                    );
                  })}
                </ul>
              </div>
            }
          />

          {projectObj.nextStepsList ? (
            <AccordionItem
              title={"Next Steps"}
              details={
                <ul className="project__detail-list">
                  {projectObj.nextStepsList.map((step) => {
                    return (
                      <li className="project__detail-list-item" key={step}>
                        {step}
                      </li>
                    );
                  })}
                </ul>
              }
            />
          ) : null}
        </AccordionGroup>
      </div>
      {projectObj.projectURL ? (
        <a
          href={projectObj.projectURL}
          className="button button__featured project__button"
          target="_blank"
        >
          Visit Project
        </a>
      ) : null}
      {projectObj.supportingLinksList ? (
        <div className="project__supporting-links-list project__button">
          {projectObj.supportingLinksList.map((supportingLink) => {
            return (
              <a
                href={supportingLink.url}
                className="button button__alt"
                target="_blank"
                key={supportingLink.url}
              >
                {supportingLink.urlName}
              </a>
            );
          })}
        </div>
      ) : null}
      {projectObj.relatedProjectsList ? (
        <div className="project__related-projects">
          <h3 className="project__related-projects-heading">Related Projects</h3>
          <div className="project__related-projects-container">
            {projectObj.relatedProjectsList.map((relatedProject) => {
              const relatedProjectObj = projectList.find(
                (project) => project.id === `${relatedProject.id}`
              );
              return (
                  <ProjectPreview data={relatedProjectObj} />
              );
            })}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default SingleProjectPage;
