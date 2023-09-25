import React from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css';

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
            <div>
              <Flashcard
              card={flashcards[currentCardIndex]}
              onDelete={onDelete}
              onUpdate={onUpdate}
              />
            </div>
          )}
          {flashcards.length > 0 && (

            <div id="nextButtonDiv">
              <button className="NextButton" onClick={displayNextCard}>
                <img id="nextButtonArrow" src={process.env.PUBLIC_URL + '/Icons/circle-right-regular.svg'} alt="nextButton" />
              </button>
            </div>
          )}
        </div>

      ) : (

        flashcards.map((flashcard) => (
          <div>
            <Flashcard
              key={flashcard.id}
              card={flashcard}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default FlashcardList;
