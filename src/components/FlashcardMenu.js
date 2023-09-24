import React from 'react';

const FlashcardMenu = ({ flashcardSets, onSelectSet }) => {
  return (
    <div className="flashcard-menu-wrapper">
      <div className="flashcard-menu">
        <h2>Flashcard Sets</h2>
        <ul>
          {flashcardSets.map((set, index) => (
            <li key={index} onClick={() => onSelectSet(set)}>
              {set.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlashcardMenu;
