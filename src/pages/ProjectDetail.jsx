import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();
  return (
    <div>
      <div>프로젝트 상세 페이지</div>
      <div>현재 선택된 프로젝트 ID는 👉 {projectId} 👈</div>
    </div>
  );
}
