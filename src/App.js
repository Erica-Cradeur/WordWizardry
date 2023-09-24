import React, { useState, useEffect } from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList';
import Flashcard from './components/Flashcard';
import FlashcardMenu from './components/FlashcardMenu'; // Import the FlashcardMenu component

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);

  const [flashcards, setFlashcards] = useState([]);
  const [newCard, setNewCard] = useState('');
  const [isFlashcardMode, setFlashcardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  useEffect(() => {
    const storedSets = JSON.parse(localStorage.getItem('flashcardSets')) || [];
    setFlashcardSets(storedSets);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const selectSet = (set) => {
    setSelectedSet(set);
    setMenuOpen(false); // Close the menu
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
    if (flashcards.length === 0) {
      console.log('no flashcards to display');
      return;
    }
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);
    setCurrentCardIndex(newIndex);
  };

  useEffect(() => {
    if (isFlashcardMode) {
      displayNextCard();
    } else {
      setCurrentCardIndex(null);
    }
  }, [isFlashcardMode, flashcards]);

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

      if (englishWord && frenchWord && phoneticInput) {
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
      card.id === id ? { ...card, english: editedEnglish, french: editedFrench, phonetic: editedPhonetic, } : card
    );
    setFlashcards(updatedFlashcards);
  };

  const toggleMode = () => {
    setFlashcardMode(!isFlashcardMode);
  };

  return (
    <div className="App">
      <img id="mainLogo" src={process.env.PUBLIC_URL + 'WordWizardryIcon.png'} alt="logo" />

      {isMenuOpen && (
        <FlashcardMenu flashcardSets={flashcardSets} onSelectSet={selectSet} />
      )}

      {selectedSet && (
        <FlashcardList
          flashcards={selectedSet.flashcards}
          onDelete={handleDeleteCard}
          onUpdate={handleUpdateCard}
        />
      )}

      <div id="top-right-buttons">
        <div className="toggle-button">
          <button id="toggleButton" onClick={toggleMode}>
            {isFlashcardMode ? <img id="ListButton" src={process.env.PUBLIC_URL + 'list-solid.svg'} alt="Listbutton" /> : <img id="FlashcardButton" src={process.env.PUBLIC_URL + 'bolt-lightning-solid.svg'} alt="FlashcardButton" />}
          </button>
        </div>
        <div className="add-card">
          <button onClick={handleAddCard}><img id="addButton" src={process.env.PUBLIC_URL + 'plus-solid.svg'} alt="addButton" /></button>
        </div>
      </div>

      {isFlashcardMode ? (
        <div className="flashcard-container">
          {currentCardIndex !== null && (
            <Flashcard
              card={flashcards[currentCardIndex]}
              onDelete={handleDeleteCard}
              onUpdate={handleUpdateCard}
            />
          )}
          <button className="NextButton" onClick={displayNextCard}>Next</button>
        </div>
      ) : (
        <div>
          <FlashcardList
            flashcards={flashcards}
            onDelete={handleDeleteCard}
            onUpdate={handleUpdateCard}
          />
        </div>
      )}
    </div>
  );
}

export default App;