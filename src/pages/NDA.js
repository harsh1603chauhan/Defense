// src/pages/Notes.js
import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const NDA = () => {
  return (
    <div>
    <Navbar/>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card
        title="Eligibility Criteria & Syllabus"
        text="Age Limit, Qualification, Physical Standards and Syllabus for IMA, INA & AFA."
        buttonLabel="Click"
        imageUrl="/ndaLogo.jpg"  // Using forward slash for image path
        onButtonClick={() => window.location.href= '/ndaeligibility'}
      />
      <Card
        title="Card Title 2"
        text="Description for Card 2."
        buttonLabel="Click"
        imageUrl="/Maths-feat.jpg"  // Using forward slash for image path
        onButtonClick={() => window.location.href= '/ndamaths'}
      />
      <Card
        title="Static GK Notes"
        text="The General Knowledge section includes questions on diverse topics such as India's Firsts, Books and Authors, Indian Cities, Famous Personalities, Important Dates, and Sports."
        buttonLabel="Learn More"
        imageUrl="/GK.avif"  // Using forward slash for image path
        onButtonClick={() => window.location.href = '/ndagk'}
      />
      <Card
        title="English"
        text="Sentence Improvement, Reading Comprehension, Synonyms, Antonyms, etc."
        buttonLabel="Click"
        imageUrl="/English.webp"  // Using forward slash for image path
        onButtonClick={() => window.location.href = '/ndaeng'}
      />
      {/* Add more cards as needed */}
    </div>
    </div>
  );
};

export default NDA;
