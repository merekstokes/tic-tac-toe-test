import { useState } from "react";
import "./App.css";
import "./app2.css";
import Square from "./Square";


function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["","","","","","","","",""])
    setPlayer(true)
  }

  function calculateWinner(array){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6]
    ];
    for (let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if (
        array[a] &&
        array[a] === array[b] &&
        array[a] === array[c]
      ){
        return `${array[a]} won!`
      }
    }
    return "Who will win?"
  }

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span><br/>
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              index={index}
              squareValue={val}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
