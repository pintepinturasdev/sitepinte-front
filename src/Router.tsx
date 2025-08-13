import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
