import { useState } from 'react';
import './App.css';
import Square from "./components/Square"
import Row from './components/Row';

function App() {
  const [currentPlayer, SetCurrentPlayer] = useState({playerOne: true})

  function handleSelectSquare() {
    if (square is unselsected) {
      change color of square
      change player
    }
  }

  return (
    <div className="App">
        <Row currentPlayer={currentPlayer} />
        <Row currentPlayer={currentPlayer} />
        <Row currentPlayer={currentPlayer} />
    </div>
  );
}

export default App;
