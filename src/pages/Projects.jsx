import React from "react";
import { project } from "../project";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <h1>프로젝트 목록</h1>
      <ul>
        {project.map((p) => (
          <li key={project.id}>
            <Link to={`/project/$${project.id}`}>
              <div>{project.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
