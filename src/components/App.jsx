import Die from "./Die";
import React from "react";
import { nanoid } from "nanoid";

export default function App() {
  //generating an array with dice objects
  function generateAllNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const diceObj = {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      };
      dice.push(diceObj);
    }
    return dice;
  }

  //initializing state of dice
  const [diceArray, setDiceArray] = React.useState(generateAllNewDice);

  //dynamically creating the number of dice
  const diceElements = diceArray.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />
  ));

  //re-rolling the dice
  function handleClick() {
    setDiceArray(generateAllNewDice);
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-button" onClick={handleClick}>
        Roll
      </button>
    </main>
  );
}
