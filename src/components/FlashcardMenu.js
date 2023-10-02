import React from 'react';
import './Flashcard.css';
import GeographicFeatures from './flashcardSets/GeographicFeatures.js';
import Numbers0_50 from './flashcardSets/Numbers0-50.js';
import Animals from './flashcardSets/Animals.js';

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
    <div id="navBarButtons" className={menuClassName}><div>
      <button className="close-button" onClick={onCloseMenu}>
      <img id="ExitButton" src={process.env.PUBLIC_URL + '/Icons/circle-xmark-solid.svg'} alt="ExitButton" />
      </button>
      <div className="HomeButton">
        <button id="HomeButton" onClick={onBackToLandingClick}><img id="homeImg" src={process.env.PUBLIC_URL + '/Icons/house-solid.svg'} alt="HomeButton" /></button>
      </div>
      </div>
      <div>
      <h2>Vocabulaire</h2>
      <ul>
        {flashcardSets.map((set, index) => (
          <li key={index} onClick={() => onSelectSet(set)}>
            {set.name}
          </li>
        ))}
      </ul>
      <button id="setButton" onClick={() => handlePremadeSetClick(GeographicFeatures)}>Caractéristiques Géographiques</button>
      <button id="setButton" onClick={() => handlePremadeSetClick(Numbers0_50)}>Nombres 0-50</button>
      <button id="setButton" onClick={() => handlePremadeSetClick(Animals)}>Animaux</button>
    </div>
    </div>
  );
};

export default FlashcardMenu;
