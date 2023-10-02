import React, { useState } from 'react';
import './Flashcard.css';

const FlashcardListMode = ({ flashcards }) => {
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);
  const constantOrder = Array.from({ length: flashcards.length }, (_, index) => index);

  const toggleDetails = (index) => {
    setShowDetailsIndex(index === showDetailsIndex ? null : index);
  };

  return (
    <div className="flashcard-list">
      {constantOrder.map((index) => {
        const flashcard = flashcards[index];
        return (
          <div key={flashcard.id} className="flashcard-list-item">
            <img id="flashcardImg" src={flashcard.englishImage} alt="English" />
            <p>{flashcard.english}</p>
            <button id="showButtonImg" onClick={toggleDetails.bind(null, index)}>
              <img id="showButton" src={process.env.PUBLIC_URL + '/Icons/eye-solid.svg'} alt="showButton" />
            </button>
            {showDetailsIndex === index && (
              <div className="flashcard-details">
                <p id="flashcardDetailsWords">{flashcard.french}</p>
                <p id="flashcardDetailsWords">/{flashcard.phonetic}/</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FlashcardListMode;