import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="logo">
      <img className="img-logo" src={logo} alt="planet logo" />
      <span className="text-logo">Space Travelers&apos; Hub</span>
    </div>
  </div>
);

export default Navbar;
