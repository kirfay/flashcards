
import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardSet({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(randomIndex);
  };
  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
};

const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => 
        (prevIndex - 1 + cards.length) % cards.length
    );
};

return (
    <div className="flashcard-set">
      {cards.length > 0 ? (
        <>
          
          <div className="button-container">
            <button onClick={showPreviousCard}>Previous Car</button>
            <button onClick={showNextCard}>Next Car</button>
          </div>
          
          <div className="flashcard">
            <Flashcard card={cards[currentCardIndex]} />
          </div>
          <button className="total-cards-button">
            Total Cards: {cards.length}
          </button>
        </>
      ) : (
        <p>No cards available</p>
      )}
    </div>
  );
}
export default FlashcardSet;
