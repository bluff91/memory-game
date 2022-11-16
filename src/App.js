import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// image imports
import helmet from "./img/helmet-1.png"
import potion from "./img/potion-1.png"
import ring from "./img/ring-1.png"
import scroll from "./img/scroll-1.png"
import shield from "./img/shield-1.png"
import sword from "./img/sword-1.png"


const imagesArray = [ 
  { item: helmet , matched: false },
  { item: potion , matched: false },
  { item: ring , matched: false },
  { item: scroll , matched: false },
  { item: shield , matched: false },
  { item: sword , matched: false }
] 


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false);
  
  const shuffleCards = () => {
    const shuffledCards = [...imagesArray, ...imagesArray]
                          .sort(() => Math.random() - 0.5)
                          .map((item) => ({...item, id:Math.random()}))
    console.log(shuffledCards)
    setCards(shuffledCards)
    setTurns(0)
    setChoiceOne(null)
    setChoiceTwo(null);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.item === choiceTwo.item) {
        
        setCards(prevState => {
          return prevState.map(card => {
            if (card.item === choiceOne.item) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => {
          resetTurn()
        }, 1000); 
      }
    }
  }, [choiceOne, choiceTwo])

  //starts the game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  // handles the player's choice
  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  function resetTurn() {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevState => prevState + 1)
    setDisabled(false);
  }
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card  => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} 
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}  
                />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
