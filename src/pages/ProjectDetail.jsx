import React from "react";
import { project } from "../project";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = project.find((p) => p.id === parseInt(id));

  if (!projects) {
    return <div>해당 프로젝트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{projects.title}</h1>
      <p>{projects.language}</p>
      <p>Updated {projects.last_update}</p>
    </div>
  );
};

export default ProjectDetail;
