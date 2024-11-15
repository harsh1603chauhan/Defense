// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
      {/* Hero Section */}
      
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
      style={{
        backgroundImage: `url('/khadakwasla.jpg')`,
        backgroundSize: 'cover', // This makes the image cover the entire div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100vh' // Optional: makes the section fill the viewport height
      }}
    >
        {/* Overlay for making the background lighter */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // White color with 50% opacity
        }}
      />
        <div className="col-md-5 p-3">
          <h1 className="display-4 font-weight-normal">De-Fence Your Dreams</h1>
          <p className="lead font-weight-normal">
          Stay warm, stay informed, and remember: a good defence is the best offence!
          </p>
          <Link className="btn btn-outline-secondary" to="/signup">Join Now</Link>

        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>

      {/* Feature Sections */}
      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <a href="https://www.gktoday.in/current-affairs/defence-current-affairs/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className="feature-section mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
  style={{
    height:'300px',
    backgroundImage: 'url("./commando.jpg")', // Replace with your image URL
    borderRadius: '21px 21px 0 0',
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    transition: 'transform 0.3s ease', // Adds a smooth transition for scaling
  }}
>
          <div className="my-3 py-3">
            <h2 className="display-5">Defence</h2>
            <p className="lead">Strengthening Security, Strategy, and National Resilience.</p>
          </div>
        </div>
        </a>
         
        <a href="https://foreignpolicy.com/tag/geopolitics/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className="feature-section mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
  style={{
    height:'300px',
    backgroundImage: 'url("./pumo.webp")', 
    borderRadius: '21px 21px 0 0',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    transition: 'transform 0.3s ease', 
  }}
>
          <div className="my-3 p-3">
            <h2 className="display-5">Geopolitics</h2>
            <p className="lead">Understanding Power, Policy, and Global Influence.</p>
          </div>
        </div>
        </a>

        <a href="https://www.gktoday.in/#google_vignette" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        
        <div className="feature-section mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
  style={{
    height:'300px',
    backgroundImage: 'url("./Kargil.jpg")', 
    borderRadius: '21px 21px 0 0',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    transition: 'transform 0.3s ease', 
  }}
>
          <div className="my-3 py-3">
            <h2 className="display-5">National Issues</h2>
            <p className="lead">Exploring Challenges and Opportunities Shaping Our Nation.</p>
          </div>
        </div>
        </a>

        <a href="https://www.gktoday.in/current-affairs/sports-current-affairs/#google_vignette" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className="feature-section mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
  style={{
    height:'300px',
    backgroundImage: 'url("./Indian-Football-Team.jpg")', 
    borderRadius: '21px 21px 0 0',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    transition: 'transform 0.3s ease', 
  }}
>
          <div className="my-3 p-3">
            <h2 className="display-5">Sports updates</h2>
            <p className="lead">Celebrating Excellence, Passion, and the Spirit of Competition.</p>
          </div>
        </div>
        </a>
      </div>

      {/* Additional Feature Sections */}
      <div>
      <a href="https://en.wikipedia.org/wiki/Indian_Army#History" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      {/* <Link to="/https://en.wikipedia.org/wiki/Indian_Army#History" style={{ textDecoration: 'none' }}> */}
      <div
  className="feature-section mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
  style={{
    height:'450px',
    backgroundImage: 'url("./1971.jpg")',
    borderRadius: '21px 21px 0 0',
    backgroundSize: '', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    transition: 'transform 0.3s ease', 
  }}
>
        <div className="my-3 p-3">
          <h2 className="display-5">Indian Army History</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
      </div>
      {/* </Link> */}
      </a>
      </div>
      {/* Footer */}
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            {/* SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="d-block mb-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
              <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
              <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
              <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
              <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
              <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
            </svg>
            <small className="d-block mb-3 text-muted">© 2024-2025</small>
          </div>
          {/* Features Columns */}
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="#">
                  Cool stuff
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Random feature
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Team feature
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Stuff for developers
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Another one
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Last time
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources Columns */}
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="#">
                  Resource
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Resource name
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Another resource
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Final resource
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="#">
                  Business
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Education
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Government
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Gaming
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="#">
                  Team
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Locations
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="#">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .feature-section {
          transition: transform 0.3s ease;
        }
        .feature-section:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default HomePage;

