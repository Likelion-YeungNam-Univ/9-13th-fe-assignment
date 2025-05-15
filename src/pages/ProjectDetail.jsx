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
    <div className="p-4 bg-gray-300">
      <h1 className="text-2xl font-bold">{project.title}</h1>
    </div>
  );
};

export default ProjectDetail;
