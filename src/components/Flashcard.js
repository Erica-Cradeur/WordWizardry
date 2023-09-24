import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ card, onDelete, onUpdate }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [editedEnglish, setEditedEnglish] = useState(card.english);
  const [editedFrench, setEditedFrench] = useState(card.french);

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
    onUpdate(card.id, editedEnglish, editedFrench);
    setFlipped(false);
  };

  const handleClick = (e) => {
    const cardInner = e.currentTarget.querySelector('.flashcard-inner');
    if (cardInner && cardInner.contains(e.target)) {
      setFlipped(!isFlipped);
    }
  };

  return (
    <div id="cardsdiv"
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!isFlipped)}
    >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p>{editedEnglish}</p>
            <div id="buttons">
              <button onClick={handleEdit} id="editButton"><img src={process.env.PUBLIC_URL + 'pen-to-square-regular.svg'} alt="edit" /></button>
              <button onClick={handleDelete} id="deleteButton"><img src={process.env.PUBLIC_URL + 'trash-can-regular.svg'} alt="edit" /></button>
            </div>
          </div>
          <div className="flashcard-back">
            <textarea id="FlashcardTextArea"
              value={editedFrench}
              onChange={(e) => setEditedFrench(e.target.value)}
            />
            <button className="saveButton" onClick={handleSave}><img src={process.env.PUBLIC_URL + '/floppy-disk-regular.svg'} alt="edit" /></button>
          </div>
        </div>
      </div>
  );
};

export default Flashcard;
