import { Link } from "react-router-dom";

const projectList = [
  { id: 1, title: "To-do List" },
  { id: 2, title: "Movie List" },
];

const Projects = () => (
  <div className="p-5">
    <h1 className="text-2xl font-bold mb-5"> 프로젝트 목록 </h1>
    <ul className="space-y-5">
      {projectList.map((project) => (
        <li key={project.id}>
          <Link
            to={`/projects/${project.id}`}
            className="text-green-700 text-xl font-bold"
          >
            {project.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
