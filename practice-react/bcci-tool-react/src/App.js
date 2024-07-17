import './App.css';
import LoginPage from './pages/LoginPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToolPage from './pages/ToolPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/tool" element={<ToolPage />} />
      </Routes>
    </Router>
  );
};

export default App;
