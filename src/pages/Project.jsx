import React from "react";
import { projects } from "./projects";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">프로젝트</h1>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
