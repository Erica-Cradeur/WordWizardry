import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({
  flashcards,
  onDelete,
  onUpdate,
  isFlashcardMode,
  currentCardIndex,
  displayNextCard,
}) => {
  return (
    <div className="flashcard-container">
      {isFlashcardMode ? (
        <div>
          {currentCardIndex !== null && flashcards.length > 0 && (
            <Flashcard
              card={flashcards[currentCardIndex]}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          )}
          {flashcards.length > 0 && (
            <button className="NextButton" onClick={displayNextCard}>
              Next
            </button>
          )}
        </div>
      ) : (
        flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            card={flashcard}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
};

export default FlashcardList;
