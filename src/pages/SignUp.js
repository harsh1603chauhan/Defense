// src/pages/SignUp.js
import React from 'react';

const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f8ff', // Light background color for the whole page
      }}
    >
      <form
        style={{
          width: '100%',
          maxWidth: '400px', // Set a max width to keep the form compact
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff', // White background for the form
        }}
      >
        <h2 className="text-center mb-4" style={{ color: '#007bff' }}>
          Sign Up
        </h2>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ color: '#333' }}>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ color: '#333' }}>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{ backgroundColor: '#007bff', border: 'none' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
