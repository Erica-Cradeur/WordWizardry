import React, { useState } from 'react';

// Existing FlashcardList component remains unchanged

const FlashcardListMode = ({ flashcards }) => {
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);

  const toggleDetails = (index) => {
    setShowDetailsIndex(index === showDetailsIndex ? null : index);
  };

  return (
    <div className="flashcard-list">
      <ul>
        {flashcards.map((flashcard, index) => (
          <li key={flashcard.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardListMode;
