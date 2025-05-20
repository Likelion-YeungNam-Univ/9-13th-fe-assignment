import { useParams, useNavigate } from "react-router-dom";
import movieImg from "../assets/movielist.png";

const projectdata = {
  1: {
    title: "To-Do List",
    description: "할 일을 리스트에 추가하고 삭제할 수 있습니다.",
  },
  2: {
    title: "영화 목록",
    description:
      "영화 목록 중 시청한 영화, 보고 싶은 영화를 리스트에 담을 수 있습니다.",
    image: movieImg,
  },
};
const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectdata[projectId];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      <img src={project.image} className="w-1/2 mb-4 rounded" />
      <button
        onClick={() => navigate("/projects")}
        className="p-2 bg-green-500 text-white rounded"
      >
        프로젝트 목록으로 돌아가기
      </button>
    </div>
  );
};

export default ProjectDetail;
