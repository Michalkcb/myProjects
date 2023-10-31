import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`} }></div>
        <div className='aboutBottom'></div>
    </div>
  )
}

export default About