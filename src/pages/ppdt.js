import React, { useState, useEffect } from 'react';

const ImageCarouselWithTimer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]); // To store images loaded from JSON
  const [timeLeft, setTimeLeft] = useState(270); // 4 min 30 sec
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Track if the timer is running
  const [showStory, setShowStory] = useState(false); // Story visibility
  const [timerId, setTimerId] = useState(null); // Store the timer ID for clearing

  // Fetch images from JSON file
  useEffect(() => {
    fetch('/images.json')
      .then(response => response.json())
      .then(data => setImages(data.images))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  // Handle the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeLeft(270); // Reset the timer for the next image
    setShowStory(false);
  };

  // Handle the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeLeft(270); // Reset the timer for the previous image
    setShowStory(false);
  };

  // Start the timer
  const startTimer = () => {
    if (isTimerRunning) return; // Prevent multiple timers
    setIsTimerRunning(true);
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id); // Stop the timer if time runs out
          handleNext(); // Go to next image when time is up
          return 270; // Reset timer after switching image
        }
        return prevTime - 1;
      });
    }, 1000);
    setTimerId(id); // Store the interval ID to clear it later
  };

  // Stop the timer
  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId); // Clear the interval
      setIsTimerRunning(false); // Set the timer state to stopped
    }
  };

  // Reset the timer and go back to the first image
  const resetTimer = () => {
    if (timerId) {
      clearInterval(timerId); // Clear the existing timer
    }
    setIsTimerRunning(false); // Set timer state to stopped
    setTimeLeft(270); // Reset timer to initial time
    setCurrentIndex(0); // Go back to the first image
    setShowStory(false); // Hide story
  };

  // Cleanup the timer on component unmount
  useEffect(() => {
    return () => {
      if (timerId) clearInterval(timerId); // Clean up timer if component is removed
    };
  }, [timerId]);

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.imageContainer}>
        {images.length > 0 && (
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            style={styles.carouselImage}
          />
        )}
      </div>
      <div style={styles.controls}>
        <button style={styles.button} onClick={handlePrev}>Previous</button>
        <button style={styles.button} onClick={handleNext}>Next</button>
      </div>
      <div style={styles.dropdown}>
        <button
          style={styles.dropdownButton}
          onClick={() => setShowStory(!showStory)}
        >
          View Story
        </button>
        {showStory && <p>{images[currentIndex]?.story}</p>}
      </div>
      <div style={styles.timer}>
        <p>Time left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      </div>
      <div>
        {isTimerRunning ? (
          <button style={styles.stopButton} onClick={stopTimer}>Stop Timer</button>
        ) : (
          <button style={styles.startButton} onClick={startTimer}>Start Timer</button>
        )}
      </div>
      <div>
        <button style={styles.resetButton} onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
  );
};

// Styles for the carousel
const styles = {
  carouselContainer: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    marginBottom: '20px',
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '400px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  controls: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'background-color 0.3s',
  },
  dropdown: {
    marginTop: '20px',
  },
  dropdownButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  timer: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  stopButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  startButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  resetButton: {
    backgroundColor: '#ffc107',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ImageCarouselWithTimer;
