import { useState } from 'react';
import './App.css';
import helmet from "./img/helmet-1.png"
import potion from "./img/potion-1.png"
import ring from "./img/ring-1.png"
import scroll from "./img/scroll-1.png"
import shield from "./img/shield-1.png"
import sword from "./img/sword-1.png"
import cover from "./img/cover.png"

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

  const shuffleCards = () => {
    const shuffledCards = [...imagesArray, ...imagesArray]
                          .sort(() => Math.random() - 0.5)
                          .map((item) => ({...item, id:Math.random()}))
    console.log(shuffledCards)
    setCards(shuffledCards);
    setTurns(0)
  }
  console.log(cards,turns)
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card  => (
          <div className='card' key={card.id}>
            <div>
              <img src={card.item} alt='card front' className='front'></img>
              <img src={cover} alt= 'cover' className='back'></img>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
