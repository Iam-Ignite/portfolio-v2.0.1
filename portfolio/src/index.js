import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components/context/ModeContext';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProjectPage from './components/Projectpage/ProjectPage';
import ContactPage from './components/ContactPage/ContactPage';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="about" element={< ContactPage/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
