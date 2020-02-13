import React, { useState } from "react";
import { useSelectedProjectsValue, useProjectsValue } from "../context";
import Project from "./Project";

const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProjects } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProjects(project.projectId);
        }}
      >
        <Project project={project} />
      </li>
    ))
  );
};

export default Projects;
