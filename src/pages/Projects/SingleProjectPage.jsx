import "./SingleProjectPage.scss";
import { projectList } from "../../api/projectsAPI";

import { useParams } from "react-router-dom";

import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

function SingleProjectPage() {
  // Captures challenge id from url and saves in variable
  const { projectPageId } = useParams();

  // Stores data of single challenge or creation from axios call to database
  const projectObj = projectList.find(
    (project) => project.id === `${projectPageId}`
  );

  return (
    <section className="project">
      <div className="project__section">
        <img src={projectObj.imgURL} alt="temp" className="project__image" />
      </div>
      <div className="project__section">
        <h1 className="project__title">{projectObj.projectName}</h1>
        <h2 className="project__heading">
          {projectObj.role} | {projectObj.client}
        </h2>
        <a href={projectObj.projectURL} className="button project__button" target="_blank">
                      Visit Project
                    </a>
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
            )
          })}
        </ul>
        <h3 className="project__subheading">Project Description</h3>
        <p className="project__detail">{projectObj.challenge}</p>
        <p className="project__detail">{projectObj.solution}</p>
        <p className="project__detail">{projectObj.roleIntro}</p>
        <p className="project__detail">{projectObj.outcomes}</p>
        <AccordionGroup
          variant="plain"
          sx={{ ml: -1.5, mb: 1.5, bgColor: "white" }}
        >
          <Accordion>
            <AccordionSummary sx={{[`&:hover`]: {bgcolor: "#E7E3F1"}, ['& .css-1twr7re-JoyAccordionSummary-button:not(.Mui-selected, [aria-selected="true"]):hover']: {bgcolor: "#E7E3F1"}}}>
              <p className="project__accordion-title">
                Learn More About my Role
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="project__detail">In my role, I:</p>
              <ul className="project__detail-list">
                {projectObj.roleList.map((roleListItem) => {
                  return (
                    <li className="project__detail-list-item">
                      {roleListItem}
                    </li>
                  );
                })}
              </ul>
            </AccordionDetails>
          </Accordion>
          {projectObj.nextStepsList ?
          <Accordion>
            <AccordionSummary sx={{[`&:hover`]: {bgcolor: "#E7E3F1"}, ['& .css-1twr7re-JoyAccordionSummary-button:not(.Mui-selected, [aria-selected="true"]):hover']: {bgcolor: "#E7E3F1"}}}>
              <p className="project__accordion-title">Next Steps</p>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="project__detail-list">
                {projectObj.nextStepsList.map((step) => {
                  return <li className="project__detail-list-item">{step}</li>;
                })}
              </ul>
            </AccordionDetails>
          </Accordion> : null}
        </AccordionGroup>

        {projectObj.relatedProjectsList ? (
          <ul className="project__detail-list">
            {projectObj.relatedProjectsList.map((relatedProject) => {
              return (
                <li className="project__detail-list-item">{relatedProject}</li>
              );
            })}
          </ul>
        ) : null}
        <a href={projectObj.projectURL} className="button project__button" target="_blank">
                      Visit Project
                    </a>
        {projectObj.supportingLinksList ? (
          <div className="project__supporting-links-list">
              {projectObj.supportingLinksList.map((supportingLink) => {
                return (
                    <a href={supportingLink.url} className="button button-alt project__button" target="_blank">
                      {supportingLink.urlName}
                    </a>
                );
              })}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default SingleProjectPage;
