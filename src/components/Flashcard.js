import React, { useState, useEffect } from 'react';
import './Flashcard.css';

const Flashcard = ({ card }) => {
  const [isFlipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [card]);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div id="flashcarddiv" className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flashcard-inner">
        <div className={`flashcard-front ${isFlipped ? 'hidden' : ''}`}>
          <div className="flashcard-word">
            <img id="flashcardImg" src={card.englishImage} alt="English" />
          </div>
        </div>
        <div className={`flashcard-back ${isFlipped ? '' : 'hidden'}`}>
          <div className="flashcard-word">
            <p>{card.french}</p>
          </div>
          <div className="flashcard-word">
            <p>{card.phonetic}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
