import React from 'react'
import ResCard from '../ResCard/ResCard'

const ResContainer = ({reservations}) => {

  let display;
  display = reservations.map(res => {
    return <ResCard {...res} key={res.id}/>
  })

  return (
    <section className="cardWrapper">
      {display}
    </section>
  )
}


export default ResContainer;