import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "./projects";

const ProjectsDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-4 text-red-500">
        해당 프로젝트 정보를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        링크
      </a>
    </div>
  );
};

export default ProjectsDetail;
