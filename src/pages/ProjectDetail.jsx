import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>해당 프로젝트 정보가 없습니다.</div>;
  }

  return (
    <div>
      <div className="p-4 bg-gray-300">
        <h1 className="text-2xl font-bold">
          {project.title}: {project.subtitle}
        </h1>
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-800 text-xl"
      >
        🔗 GitHub 링크
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.images?.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`프로젝트 이미지 ${index + 1}`}
            className="w-full rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
