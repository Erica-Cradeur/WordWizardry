import React, { useState } from 'react';

const FlashcardListMode = ({ flashcards }) => {
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);

  const toggleDetails = (index) => {
    setShowDetailsIndex(index === showDetailsIndex ? null : index);
  };

  return (
    <div className="flashcard-list">
        {flashcards.map((flashcard, index) => (
          <p key={flashcard.id}>
            <div className="flashcard">
              <p>{flashcard.english}</p>
              <button onClick={toggleDetails.bind(null, index)}>Show</button>
            </div>
            {showDetailsIndex === index && (
              <div>
                <p>French: {flashcard.french}</p>
                <p>Phonetic: {flashcard.phonetic}</p>
              </div>
            )}
          </p>
        ))}
    </div>
  );
};

export default FlashcardListMode;
