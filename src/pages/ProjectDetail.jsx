import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/projects")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default ProjectDetail;
