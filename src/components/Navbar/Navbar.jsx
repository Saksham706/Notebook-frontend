import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <span className='logo'>Notebook</span>
      </div>

      <div className='hamburger' onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-center ${menuOpen ? 'active' : ''}`}>
        <ul className='navbar-list'>
          <li><Link to="/home" className='navbar-link' onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className='navbar-link' onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>
      </div>

      <div className='navbar-right'>
        {location.pathname !== "/" && (
          <button className='sign-in-button' onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
