import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Projects from './pages/Projects';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
