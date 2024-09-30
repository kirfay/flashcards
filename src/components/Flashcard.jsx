import React, { useState } from 'react';

function Flashcard({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);
  
  const cardClass = card.type === 'Coupe' ? 'coupe-card' : 'sedan-card';

  
  return (
    <div className={cardClass} onClick={() => setShowAnswer(!showAnswer)}>
        {card.image && <img src={card.image} alt={card.question} className="car-image" />}
      <div className="card-content">
        <p>{showAnswer ? card.answer : card.question}</p>
    
      </div>
      
    </div>
  );
}

export default Flashcard;