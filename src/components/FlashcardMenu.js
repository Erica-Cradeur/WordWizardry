import React from 'react';
import premadeSet1 from './flashcardSets/premadeSet1.js';
import premadeSet2 from './flashcardSets/premadeSet2.js';

const FlashcardMenu = ({
  flashcardSets,
  onSelectSet,
  isMenuOpen,
  onCloseMenu,
  onPremadeSetClick,
  onBackToLandingClick,
}) => {
  const menuClassName = `flashcard-menu ${isMenuOpen ? 'open' : ''}`;

  const handlePremadeSetClick = (premadeSet) => {
    onCloseMenu();
    onPremadeSetClick(premadeSet);
  };

  return (
    <div className={menuClassName}>
      <button className="close-button" onClick={onCloseMenu}>
        x
      </button>
      <h2>Vocabulary Sets</h2>
      <ul>
        {flashcardSets.map((set, index) => (
          <li key={index} onClick={() => onSelectSet(set)}>
            {set.name}
          </li>
        ))}
      </ul>
      <button onClick={() => handlePremadeSetClick(premadeSet1)}>meow</button>
      <button onClick={() => handlePremadeSetClick(premadeSet2)}>woof</button>
      <div>
        <button onClick={onBackToLandingClick}>Back to Landing Page</button>
      </div>
    </div>
  );
};

export default FlashcardMenu;
