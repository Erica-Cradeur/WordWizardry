import React from 'react';
import premadeSet1 from './flashcardSets/premadeSet1.js';

const FlashcardMenu = ({
  flashcardSets,
  onSelectSet,
  isMenuOpen,
  onCloseMenu,
  onPremadeSetClick,
  onBackToLandingClick, // Add this prop
}) => {
  const menuClassName = `flashcard-menu ${isMenuOpen ? 'open' : ''}`;

  return (
    <div className={menuClassName}>
      <button className="close-button" onClick={onCloseMenu}>
        x
      </button>
      <h2>Flashcard Sets</h2>
      <ul>
        {flashcardSets.map((set, index) => (
          <li key={index} onClick={() => onSelectSet(set)}>
            {set.name}
          </li>
        ))}
      </ul>
      <h2>Premade Sets</h2>
      <button onClick={() => onPremadeSetClick(premadeSet1)}>Premade Set 1</button>
      <div>
        <button onClick={onBackToLandingClick}>Back to Landing Page</button>
      </div>
    </div>
  );
};

export default FlashcardMenu;
