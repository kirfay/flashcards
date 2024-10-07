
import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardSet({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const showRandomCard = () => {
  const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(randomIndex);
    setShowAnswer(false);
    setFeedback('');
  };
  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setShowAnswer(false);
    setFeedback('');
};

const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => 
        (prevIndex - 1 + cards.length) % cards.length
    );
    setShowAnswer(false);
    setFeedback('');
};

const shuffleCards = () => {
  const shuffled = [...shuffledCards].sort(() => Math.random() - 0.5);
  setShuffledCards(shuffled);
  setCurrentCardIndex(0); // Reset to the first card in the shuffled deck
};

const handleGuess = () => {
  const currentCard = cards[currentCardIndex];
  if (userGuess.trim().toLowerCase() === currentCard.answer.toLowerCase()) {
    setFeedback('Correct!');
    setShowAnswer(true);
  } else {
    setFeedback('Incorrect. Try again!');
  }
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
          
          <input 
            type="text" 
            className="guess-input"
            value={userGuess} 
            onChange={(e) => setUserGuess(e.target.value)} 
            placeholder="Enter your guess here"
          />
          <button className="submit-guess-button" onClick={handleGuess}>
          Submit Guess</button>

          
          <p className="feedback">{feedback}</p>
          <button className="shuffle-button" onClick={shuffleCards}>Shuffle</button>

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
