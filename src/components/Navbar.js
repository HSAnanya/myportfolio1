import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaMoon, FaSun } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import DropDownList from '../DropDownList';

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <header>
      <nav id="navbar">
       <aside><DropDownList /></aside> 
        <Link to="/"><FaHome/></Link>
        <Link to="/about"><FaUser /></Link>
        <Link to="/projects"><FaProjectDiagram /></Link>
        <Link to="/contact"><BiPhone /></Link>
        <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          {darkMode ? <FaSun style={{ color: '#FFA500', fontSize: '1.2em' }} /> : <FaMoon style={{ color: '#333', fontSize: '1.2em' }} />}
       </button>
      </nav>
    </header>
  );
}

export default Navbar;

