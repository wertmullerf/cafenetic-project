import React from 'react';
import './Card.css';

const Cards = ({title1, text1, title2, text2, title3, text3}) => {
  return (
    <section className="cardSection container">
        <div className="card card1">
            <strong>{title1}</strong>
            <p>{text1}</p>
        </div>
        <div className="card card2">
            <strong>{title2}</strong>
            <p>{text2}</p>
        </div>
        <div className="card card3">
            <strong>{title3}</strong>
            <p>{text3}</p>
        </div>
    </section>
  )
}

export default Cards