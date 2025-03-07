import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/brain.css';
import './styles/student-grid.css';
import './styles/mainPage.css';
import Navigation from './components/Navigation';
import StudentGrid from './components/StudentGrid';
import MainPage from './components/MainPage';
import { NavbarProvider } from './context/NavbarContext';

const App: React.FC = () => {
  return (
    <NavbarProvider>
      <Router>
        <div className="app-container">
          <Navigation />
          <Routes>
            <Route path="/about" element={<MainPage />} />
            <Route path="/demo" element={<StudentGrid />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </NavbarProvider>
  );
};

export default App;
