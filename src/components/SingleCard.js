import React from 'react';
import "./SingleCard.css"
import cover from "../img/cover.png"

function SingleCard(props) {

    function handleClick() {
       props.handleChoice(props.card) 
    }
    return (
        
        <div className='card'>
            <div>
              <img src={props.card.item} alt='card front' className='front'></img>
              <img src={cover} alt= 'cover' className='back' onClick={handleClick} ></img>
            </div>
        </div>
    );
}

export default SingleCard;