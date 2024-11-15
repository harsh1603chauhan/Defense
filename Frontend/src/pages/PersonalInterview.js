import React, { useState, useEffect } from 'react';
import PersonalInterviewDocs from '../pages/PersonalInterviewDocs.json';

const PersonalInterview = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    setDocuments(PersonalInterviewDocs); 
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Personal Interview Documents</h2>
      <ul style={styles.list}>
        {documents.map((doc, index) => (
          <li key={index} style={styles.listItem}>
            <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <h3 style={styles.title}>{doc.title}</h3>
              <p style={styles.description}>{doc.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '15px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    transition: 'box-shadow 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#007bff',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
};

// Hover effect for list items
styles.listItem[':hover'] = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

export default PersonalInterview;
