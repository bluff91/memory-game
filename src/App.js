import { useState } from 'react';
import './App.css';

const imagesArray = [ 
  { "src" : "/img/helmet-1.png", matched: false },
  { "src" : "/img/potion-1.png", matched: false },
  { "src" : "/img/ring-1.png", matched: false },
  { "src" : "/img/scroll-1.png", matched: false },
  { "src" : "/img/shield-1.png", matched: false },
  { "src" : "/img/sword-1.png", matched: false }
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
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((item) => (
          <div className='card' key={item.id}>
            <div>
              <img src={item.src} alt='card front' className='front'></img>
              <img src='/img/cover.png' alt= 'cover' className='back'></img>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
