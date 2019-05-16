import React from 'react'
import ResCard from '../ResCard/ResCard'

const ResContainer = ({reservations}) => {
  console.log(reservations)

  let display;
  display = reservations.map(res => {
    return <ResCard {...res} />
  })

  return (
    <section>
      {display}
    </section>
  )
}


export default ResContainer;