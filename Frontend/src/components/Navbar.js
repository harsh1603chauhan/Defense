// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSSBDropdownOpen, setSSBDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <Link className="navbar-brand" to="/">SSB+</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>

          {/* Notes Dropdown */}
          <li
            className="nav-item dropdown"
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Notes
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{
                display: isDropdownOpen ? 'block' : 'none',
                position: 'absolute',
                top: '100%',
                left: '0',
              }}
            >
              <Link className="dropdown-item" to="/CDS">CDS</Link>
              <Link className="dropdown-item" to="/NDA">NDA</Link>
            </div>
          </li>

          {/* SSB Dropdown */}
          <li
            className="nav-item dropdown"
            style={{ position: 'relative' }}
            onMouseEnter={() => setSSBDropdownOpen(true)}
            onMouseLeave={() => setSSBDropdownOpen(false)}
          >
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdownSSB"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SSB
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownSSB"
              style={{
                display: isSSBDropdownOpen ? 'block' : 'none',
                position: 'absolute',
                top: '100%',
                left: '0',
              }}
            >
              <Link className="dropdown-item" to="/ppdt">PPDT & TAT</Link>
              <Link className="dropdown-item" to="/wat">WAT</Link>
              <Link className="dropdown-item" to="/personal-interview">Personal Interview</Link>
              <Link className="dropdown-item" to="/SRT">SRT</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/something-else">Tips</Link>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://forms.gle/sceeJ7BCe8DvX7YU9" target="_blank" rel="noopener noreferrer">
              Upload Notes
            </a>
          </li>

          <li className="nav-item">
            <span className="nav-link">Feedback</span>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
