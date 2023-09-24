import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, onDelete, onUpdate }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((card) => (
        <Flashcard
          key={card.id}
          card={card}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
