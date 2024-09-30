import React from 'react';
import './App.css';

import FlashcardSet from "./components/FlashcardSet"; 

const carCards = [
  { question: 'What type of car is this?', answer: 'Make: Lamborghini, Model: Revuelto, Year: 2024, Type: Coupe',image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/revuelto/ar_revuelto.png'},
  { question: 'What type of car is this?', answer: 'Make: Tesla, Model: S, Year: 2021, Type: Sedan', image: 'https://cdn.euroncap.com/media/72827/tesla-model-s.png' }
  
];

function App() {
  return (
    <div>
      <h1>Car Quiz</h1>
      <p className="description">See how much you know about cars</p>
      <FlashcardSet cards={carCards} />
    </div>
  );
}

export default App;