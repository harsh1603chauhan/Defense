// src/pages/Notes.js
import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const CDS = () => {
  return (
    <div>
    <Navbar/>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card
        title="Eligibilty Criteria & Syllabus"
        text="Age Limit, Qualification, Physical Standards and Syllabus for IMA, INA & AFA."
        buttonLabel="Learn"
        imageUrl="/cds22.jpg"  // Using forward slash for image path
        
        onButtonClick={() => window.location.href = '/eligible'}
      />

      <Card
        title="Mathematics"
        text="CDS Study Material: Elementary Mathematics Notes."
        buttonLabel="Learn More"
        imageUrl="/Maths-feat.jpg"  // Using forward slash for image path
        onButtonClick={() => window.location.href = '/maths'}
      />
      <Card
        title="Static GK Notes"
        text="The General Knowledge section includes questions on diverse topics such as India's Firsts, Books and Authors, Indian Cities, Famous Personalities, Important Dates, and Sports."
        buttonLabel="Learn More"
        imageUrl="/GK.avif"  // Using forward slash for image path
        onButtonClick={() => window.location.href = '/gk'}
      />
      <Card
        title="English"
        text="Sentence Improvement, Reading Comprehension, Synonyms, Antonyms, etc.."
        buttonLabel="Learn More"
        imageUrl="/English.webp"  // Using forward slash for image path
        onButtonClick={() => window.location.href = '/english'}
      />
      {/* Add more cards as needed */}
    </div>
    </div>
  );
};

export default CDS;
