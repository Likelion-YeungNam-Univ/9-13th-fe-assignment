import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./projects";

const ProjectsDetail = () => {
  const navigate = useNavigate();
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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold p-3">{project.title}</h1>
      <div className="flex space-x-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-xl hover:underline"
        >
          github
        </a>
        <div
          onClick={() => navigate(-1)}
          className="bg-gray-200 border rounded-xl p-1 hover:bg-yellow-200"
        >
          목록으로
        </div>
      </div>
      <div className="text-xl p-4">과제 설명: {project.description}</div>
      <img src={project.thumbnail} className="scale-75" />
    </div>
  );
};

export default ProjectsDetail;
