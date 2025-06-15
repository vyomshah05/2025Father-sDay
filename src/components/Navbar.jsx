import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [visible, setVisible] = useState(false);
  let hideTimer = null;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY <= 40) {
        setVisible(true);
        clearTimeout(hideTimer);
      } else {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => setVisible(false), 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          HAPPY FATHERS DAY <i className="fab fa-typo3" />
        </Link>
        <Link to="/" className="navbar-logo">
          HAPPY MOTHERS DAY <i className="fas fa-heart" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
