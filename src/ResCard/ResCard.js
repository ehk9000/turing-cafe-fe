import React from 'react'
import './ResCard.css'

const ResCard = ({date, id, name, time, number}) => {
  return (
    <section className="cardWrapper">
      <div className="card">
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of Guests{number}</p>
        <button>Cancel</button>
      </div>
    </section>
  )
}

export default ResCard;