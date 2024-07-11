// Styles
import "./ProjectsListPage.scss";
import { useEffect, useState } from "react";

import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { projectList } from "../../api/projectsAPI";

function ProjectsListPage() {
  // Scrolls page to top on load
  window.scrollTo(0, 0);
  // Stores the classes for active and inactive buttons
  const activeButtonClass =
    "projects__filter-button projects__filter-button--active";
  const inactiveButtonClass = "projects__filter-button";

  const [filteredProjects, setFilteredProjects] = useState(projectList);
  const [activeFilter, setActiveFilter] = useState("all");
  const [allFilterClass, setAllFilterClass] = useState(activeButtonClass);
  const [codeFilterClass, setCodeFilterClass] = useState(inactiveButtonClass);
  const [designFilterClass, setDesignFilterClass] =
    useState(inactiveButtonClass);
  const [writingFilterClass, setWritingFilterClass] =
    useState(inactiveButtonClass);
  const [communicationsFilterClass, setCommunicationsFilterClass] =
    useState(inactiveButtonClass);

  // Listens for changes to activeTab and sets filteredProjects accordingly
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projectList);
    }

    // Filters for code projects
    if (activeFilter === "code") {
      const codeProjects = [];

      for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].filterList.includes("code")) {
          codeProjects.push(projectList[i]);
        }
      }

      setFilteredProjects(codeProjects);
    }

    // Filters for design projects
    if (activeFilter === "design") {
      const designProjects = [];

      for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].filterList.includes("design")) {
          designProjects.push(projectList[i]);
        }
      }

      setFilteredProjects(designProjects);
    }

    // Filters for writing projects
    if (activeFilter === "writing") {
      const writingProjects = [];

      for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].filterList.includes("writing")) {
          writingProjects.push(projectList[i]);
        }
      }

      setFilteredProjects(writingProjects);
    }

    // Filters for communications projects
    if (activeFilter === "communications") {
      const communicationsProjects = [];

      for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].filterList.includes("communications")) {
          communicationsProjects.push(projectList[i]);
        }
      }

      setFilteredProjects(communicationsProjects);
    }
  }, [activeFilter]);

  // Button handler sets active filter to all
  const handleAllFilter = () => {
    setActiveFilter("all");
    setAllFilterClass(activeButtonClass);
    setCodeFilterClass(inactiveButtonClass);
    setDesignFilterClass(inactiveButtonClass);
    setWritingFilterClass(inactiveButtonClass);
    setCommunicationsFilterClass(inactiveButtonClass);
  };

  // Button handler sets active filter to code
  const handleCodeFilter = () => {
    setActiveFilter("code");
    setAllFilterClass(inactiveButtonClass);
    setCodeFilterClass(activeButtonClass);
    setDesignFilterClass(inactiveButtonClass);
    setWritingFilterClass(inactiveButtonClass);
    setCommunicationsFilterClass(inactiveButtonClass);
  };

  // Button handler sets active filter to design
  const handleDesignFilter = () => {
    setActiveFilter("design");
    setAllFilterClass(inactiveButtonClass);
    setCodeFilterClass(inactiveButtonClass);
    setDesignFilterClass(activeButtonClass);
    setWritingFilterClass(inactiveButtonClass);
    setCommunicationsFilterClass(inactiveButtonClass);
  };

  // Button handler sets active filter to writing
  const handleWritingFilter = () => {
    setActiveFilter("writing");
    setAllFilterClass(inactiveButtonClass);
    setCodeFilterClass(inactiveButtonClass);
    setDesignFilterClass(inactiveButtonClass);
    setWritingFilterClass(activeButtonClass);
    setCommunicationsFilterClass(inactiveButtonClass);
  };

  // Button handler sets active filter to communications
  const handleCommunicationsFilter = () => {
    setActiveFilter("communications");
    setAllFilterClass(activeButtonClass);
    setCodeFilterClass(inactiveButtonClass);
    setDesignFilterClass(inactiveButtonClass);
    setWritingFilterClass(inactiveButtonClass);
    setCommunicationsFilterClass(inactiveButtonClass);
  };

  return (
    <section className="projects">
      <h2 className="projects__title">Recent Work</h2>
      <div className="projects__filters">
        <button 
          id="filter-all"
          className={allFilterClass}
          onClick={handleAllFilter}
        >
          All
        </button>
        <button
          id="filter-code"
          className={codeFilterClass}
          onClick={handleCodeFilter}
        >
          Code
        </button>
        <button
          id="filter-design"
          className={designFilterClass}
          onClick={handleDesignFilter}
        >
          Design
        </button>
        <button
          id="filter-writing"
          className={writingFilterClass}
          onClick={handleWritingFilter}
        >
          Writing
        </button>
        <button
          id="filter-communications"
          className={communicationsFilterClass}
          onClick={handleCommunicationsFilter}
        >
          Communications
        </button>
      </div>
      <div className="projects__container">
        {filteredProjects.map((projects) => (
          <ProjectPreview data={projects} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsListPage;
