import React, { useState, useEffect } from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList';
import Flashcard from './components/Flashcard';
import FlashcardMenu from './components/FlashcardMenu';
import premadeSet1 from './components/flashcardSets/premadeSet1';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);

  const [flashcards, setFlashcards] = useState([]);
  const [isFlashcardMode, setFlashcardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [currentPremadeCardIndex, setCurrentPremadeCardIndex] = useState(null); // Track premade set card index

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
    setMenuOpen(false); // Close the menu
    setCurrentCardIndex(null); // Reset current card index
    setCurrentPremadeCardIndex(null); // Reset current premade card index
  };

  const handlePremadeSetClick = (premadeSet) => {
    setFlashcardMode(true); // Set flashcard mode to true
    setSelectedSet(premadeSet); // Select the premade set
    setCurrentCardIndex(0); // Initialize current card index to 0
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

    if (currentPremadeCardIndex === null) {
      // If no premade card is selected, start with the first one
      newIndex = 0;
    } else {
      // Otherwise, move to the next card if available
      newIndex = currentPremadeCardIndex + 1;
      if (newIndex >= selectedSet.flashcards.length) {
        newIndex = 0; // Loop back to the first card
      }
    }

    setCurrentPremadeCardIndex(newIndex); // Update the current premade card index
  };

  const handleAddCard = () => {
    const promptContainer = document.createElement('div');
    promptContainer.className = 'centered-prompt';

    const promptContent = document.createElement('div');
    promptContent.className = 'prompt-content';

    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.textContent = 'x';

    const cancelAddCard = () => {
      document.body.removeChild(promptContainer);
    };

    closeButton.addEventListener('click', cancelAddCard);

    const englishInput = document.createElement('input');
    englishInput.placeholder = 'English Word';
    const frenchInput = document.createElement('input');
    frenchInput.placeholder = 'French Word';
    const phoneticInput = document.createElement('input');
    phoneticInput.placeholder = 'Phonetic Word';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Flashcard';

    addButton.addEventListener('click', () => {
      const englishWord = englishInput.value.trim();
      const frenchWord = frenchInput.value.trim();
      const phoneticWord = phoneticInput.value.trim();

      if (englishWord && frenchWord && phoneticWord) {
        const newFlashcard = {
          id: Date.now(),
          english: englishWord,
          french: frenchWord,
          phonetic: phoneticWord,
        };
        setFlashcards([...flashcards, newFlashcard]);

        document.body.removeChild(promptContainer);
      }
    });

    promptContent.appendChild(closeButton);
    promptContent.appendChild(englishInput);
    promptContent.appendChild(frenchInput);
    promptContent.appendChild(phoneticInput);
    promptContent.appendChild(addButton);
    promptContainer.appendChild(promptContent);
    document.body.appendChild(promptContainer);
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
  };

  const [isLandingPage, setLandingPage] = useState(true);

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
          onBackToLandingClick={handleBackToLandingClick}
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
        {selectedSet === null && (
          <div className="add-card">
            <button onClick={handleAddCard}>
              <img id="addButton" src={process.env.PUBLIC_URL + 'plus-solid.svg'} alt="addButton" />
            </button>
          </div>
        )}
      </div>

      <div className="flashcard-container">
        {selectedSet && isFlashcardMode ? (
          <FlashcardList
            flashcards={selectedSet.flashcards}
            onDelete={handleDeleteCard} // Pass handleDeleteCard as a prop
            onUpdate={handleUpdateCard} // Pass handleUpdateCard as a prop
            isFlashcardMode={isFlashcardMode}
            currentCardIndex={currentCardIndex}
            displayNextCard={displayNextCard}
          />
        
        ) : isFlashcardMode ? (
          <div>
            {currentCardIndex !== null && flashcards.length > 0 && (
              <Flashcard
                card={flashcards[currentCardIndex]}
                onDelete={handleDeleteCard}
                onUpdate={handleUpdateCard}
              />
            )}
            {flashcards.length > 0 && (
              <button className="NextButton" onClick={displayNextCard}>
                Next
              </button>
            )}
          </div>
        ) : (
          <FlashcardList
            flashcards={flashcards}
            onDelete={handleDeleteCard}
            onUpdate={handleUpdateCard}
            isFlashcardMode={isFlashcardMode}
            currentCardIndex={currentCardIndex}
            displayNextCard={displayNextCard}
          />
        )}
      </div>
    </div>
  );
}

export default App;
