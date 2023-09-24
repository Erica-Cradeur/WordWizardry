import React, { useState, useEffect } from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList';
import Flashcard from './components/Flashcard';
import FlashcardMenu from './components/FlashcardMenu';
import FlashcardListMode from './components/FlashcardListMode'; // Import the new component
import premadeSet1 from './components/flashcardSets/premadeSet1';
import premadeSet2 from './components/flashcardSets/premadeSet2';

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
    setFlashcardMode(false); // Ensure flashcard mode is turned off
    setListMode(true); // Turn on list mode
  };
  

  useEffect(() => {
    const storedFlashcards = JSON.parse(localStorage.getItem('flashcards'));
    if (storedFlashcards) {
      setFlashcards(storedFlashcards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const displayNextCard = () => {
    if (!selectedSet || !selectedSet.flashcards || selectedSet.flashcards.length === 0) {
      console.log('No flashcards in the selected set to display');
      return;
    }

    let newIndex;

    if (isFlashcardMode) {
      // If in flashcard mode, increment the current index
      newIndex = currentCardIndex === null ? 0 : currentCardIndex + 1;

      if (newIndex >= selectedSet.flashcards.length) {
        newIndex = 0;
      }
    } else {
      // If not in flashcard mode, generate a random index
      newIndex = Math.floor(Math.random() * selectedSet.flashcards.length);
    }

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
        <img id="mainLogo" src={process.env.PUBLIC_URL + 'WordWizardryIcon.png'} alt="logo" />
      </div>

      {isMenuOpen && (
        <FlashcardMenu
          flashcardSets={flashcardSets}
          onSelectSet={selectSet}
          isMenuOpen={isMenuOpen}
          onCloseMenu={handleCloseMenu}
          onPremadeSetClick={handlePremadeSetClick}
          onBackToLandingClick={handleBackToLandingClick} // Pass the function here
        />
      )}

      <div id="top-right-buttons">
        <div className="toggle-button">
          <button id="toggleButton" onClick={toggleMode}>
            {isFlashcardMode ? (
              <img id="ListButton" src={process.env.PUBLIC_URL + 'list-solid.svg'} alt="Listbutton" />
            ) : (
              <img id="FlashcardButton" src={process.env.PUBLIC_URL + 'bolt-lightning-solid.svg'} alt="FlashcardButton" />
            )}
          </button>
        </div>
      </div>

      <div className="flashcard-container">
        {isLandingPage ? (
          <div>
            <h1>Welcome!</h1>
            <p>Select a flashcard set to get started.</p>
          </div>
        ) : selectedSet && isFlashcardMode ? (
          <FlashcardList
            flashcards={selectedSet.flashcards}
            onDelete={handleDeleteCard}
            onUpdate={handleUpdateCard}
            isFlashcardMode={isFlashcardMode}
            currentCardIndex={currentCardIndex}
            displayNextCard={displayNextCard}
          />
          
        ) : isListMode && selectedSet && (
          <FlashcardListMode flashcards={selectedSet.flashcards} /> // Render the new component in list mode
        )}
        {selectedSet && !isFlashcardMode && !isListMode && (
          <button className="back-to-landing" onClick={handleBackToLandingClick}>
            Back to Landing Page
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
