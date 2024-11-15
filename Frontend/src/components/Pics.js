import React, { useState, useEffect } from 'react';
import ImageCarouselWithTimer from '../pages/ppdt';

function Pics() {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    fetch('/images.json')
      .then(response => response.json())
      .then(data => setImagesData(data.images))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="Pic">
      {imagesData.length > 0 && (
        <ImageCarouselWithTimer
          images={imagesData}
        />
      )}
    </div>
  );
}

export default Pics;
