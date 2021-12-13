import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="logo">
      <img className="img-logo" src={logo} alt="planet logo" />
      <span className="text-logo">Space Travelers&apos; Hub</span>
    </div>
    <div className="nav-links">
      <ul className="link-list">
        <li>
          <NavLink to="/rockets" className="link-item">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className="link-item">
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className="link-item">
            Dragons
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
