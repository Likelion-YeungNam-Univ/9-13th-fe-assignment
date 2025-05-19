import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
