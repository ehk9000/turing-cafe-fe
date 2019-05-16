import React from 'react'

const ResCard = ({date, id, name, time, number}) => {
  return (
    <section className="cardWrapper">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests{number}</p>
      <button>Cancel</button>
    </section>
  )
}

export default ResCard;