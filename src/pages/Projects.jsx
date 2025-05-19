import React from "react";
import { projects } from "../projects";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">프로젝트 목록</h1>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li>
            <Link
              to={`/projects/${project.id}`}
              className="text-blue-600 hover:underline"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
