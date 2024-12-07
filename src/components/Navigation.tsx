import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import { useNavbar } from '../context/NavbarContext';

const Navigation: React.FC = () => {
  const { isNavbarEnabled } = useNavbar();

  if (!isNavbarEnabled) return null;

  return (
    <nav className="navigation">
      <div className="nav-brand">2024 Calvin Senior Project</div>
      <div className="nav-links">
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/demo" className="nav-link">Demo</Link>
      </div>
    </nav>
  );
};

export default Navigation; 