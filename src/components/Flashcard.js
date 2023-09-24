import React, { useState, useEffect } from 'react';
import './Flashcard.css';

const Flashcard = ({ card, onDelete, onUpdate }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [editedEnglish, setEditedEnglish] = useState(card.english);
  const [editedFrench, setEditedFrench] = useState(card.french);
  const [editedPhonetic, setEditedPhonetic] = useState(card.phonetic);

  useEffect(() => {
    // Reset the card to the front side when card prop changes (e.g., when clicking "Next").
    setFlipped(false);
  }, [card]);

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this card?');
    if (confirmDelete) {
      onDelete(card.id);
    }
  };

  const handleEdit = () => {
    setFlipped(false);
  };

  const handleSave = () => {
    onUpdate(card.id, editedEnglish, editedFrench, editedPhonetic);
    setFlipped(false);
  };

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flashcard-inner">
        <div className={`flashcard-front ${isFlipped ? 'hidden' : ''}`}>
          <div className="flashcard-word">
            <h3>English:</h3>
            <p>{card.english}</p>
          </div>
        </div>
        <div className={`flashcard-back ${isFlipped ? '' : 'hidden'}`}>
          <div className="flashcard-word">
            <h3>French:</h3>
            <p>{card.french}</p>
          </div>
          <div className="flashcard-word">
            <h3>Phonetic:</h3>
            <p>{card.phonetic}</p>
          </div>
        </div>
      </div>
      <div className="flashcard-actions">
        <button onClick={handleDelete}>Delete</button>
        {isFlipped ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleEdit}>Edit</button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Flashcard;
