import React from "react";
import { projects } from "./projects";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((m) => m.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-4 text-red-500">해당 프로젝트를 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
    </div>
  );
};

export default ProjectDetail;
