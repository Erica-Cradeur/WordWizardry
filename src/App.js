import React, { useState, useEffect } from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList';
import Flashcard from './components/Flashcard';
import FlashcardMenu from './components/FlashcardMenu';
import FlashcardListMode from './components/FlashcardListMode';


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [isFlashcardMode, setFlashcardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [isLandingPage, setLandingPage] = useState(true);
  const [isListMode, setListMode] = useState(false);

  useEffect(() => {
    const storedSets = JSON.parse(localStorage.getItem('flashcardSets')) || [];
    setFlashcardSets(storedSets);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const selectSet = (set) => {
    setSelectedSet(set);
    setMenuOpen(false);
    setCurrentCardIndex(null);
    setFlashcardMode(false);
    setLandingPage(false);
  };

  const handlePremadeSetClick = (premadeSet) => {
    setSelectedSet(premadeSet);
    setCurrentCardIndex(0);
    setLandingPage(false);
    setFlashcardMode(false);
    setListMode(true);
  };
  

  useEffect(() => {
    const storedFlashcards = JSON.parse(localStorage.getItem('flashcardSets'));
    if (storedFlashcards) {
      setFlashcards(storedFlashcards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('flashcardSets', JSON.stringify(flashcardSets));
  }, [flashcards]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const displayNextCard = () => {
  if (!selectedSet || !selectedSet.flashcards || selectedSet.flashcards.length === 0) {
    console.log('No flashcards in the selected set to display');
    return;
  }

  // Shuffle the flashcards array
  const shuffledFlashcards = shuffleArray(selectedSet.flashcards);

  // Find the index of the current card in the shuffled array
  const currentIndex = shuffledFlashcards.findIndex(
    (card) => card.id === selectedSet.flashcards[currentCardIndex].id
  );

  // Calculate the index of the next card, considering looping back to the start if at the end
  const newIndex = (currentIndex + 1) % shuffledFlashcards.length;

  // Set the current card index to the new index
  setCurrentCardIndex(newIndex);
};


  const handleDeleteCard = (id) => {
    const updatedFlashcards = flashcards.filter((card) => card.id !== id);
    setFlashcards(updatedFlashcards);
  };

  const handleUpdateCard = (id, editedEnglish, editedFrench, editedPhonetic) => {
    const updatedFlashcards = flashcards.map((card) =>
      card.id === id
        ? { ...card, english: editedEnglish, french: editedFrench, phonetic: editedPhonetic }
        : card
    );
    setFlashcards(updatedFlashcards);
  };

  const toggleMode = () => {
    setFlashcardMode(!isFlashcardMode);
    setListMode(!isListMode);
  };

  const handleBackToLandingClick = () => {
    setSelectedSet(null);
    setLandingPage(true);
  };

  return (
    <div className="App">
      <div className="menu-button" onClick={toggleMenu}>
        <img id="mainLogo" src={process.env.PUBLIC_URL + '/WordWizardryIcon.png'} alt="logo" />
      </div>

      {isMenuOpen && (
        <FlashcardMenu
          flashcardSets={flashcardSets}
          onSelectSet={selectSet}
          isMenuOpen={isMenuOpen}
          onCloseMenu={handleCloseMenu}
          onPremadeSetClick={handlePremadeSetClick}
          onBackToLandingClick={handleBackToLandingClick}
        />
      )}

      <div id="top-right-buttons">
        <div className="toggle-button">
          <button id="toggleButton" onClick={toggleMode}>
            {isFlashcardMode ? (
              <img id="ListButton" src={process.env.PUBLIC_URL + '/Icons/list-solid.svg'} alt="Listbutton" />
            ) : (
              <img id="FlashcardButton" src={process.env.PUBLIC_URL + '/Icons/bolt-lightning-solid.svg'} alt="FlashcardButton" />
            )}
          </button>
        </div>
      </div>

      <div className="flashcard-container">
        {isLandingPage ? (
          <div id="LandingPageTitle">
            <h1 id="welcomeTitle">Bonjour!</h1>
            <p id="welcomeTitle">sélectionnez le logo des ensembles de vocabulaire</p>
          </div>
        ) : selectedSet && isFlashcardMode ? (
          <div id="flashcardFlashMode"><FlashcardList
            flashcards={selectedSet.flashcards}
            onDelete={handleDeleteCard}
            onUpdate={handleUpdateCard}
            isFlashcardMode={isFlashcardMode}
            currentCardIndex={currentCardIndex}
            displayNextCard={displayNextCard}
          /></div>
        ) : isListMode && selectedSet && (
          <FlashcardListMode flashcards={selectedSet.flashcards} />
        )}
        {selectedSet && !isFlashcardMode && !isListMode && (
          <button className="back-to-landing" onClick={handleBackToLandingClick}>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
