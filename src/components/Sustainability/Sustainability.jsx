import React from 'react'
import './Sustainability.css'
import Card from '../Cards/Card'
import Titles from '../Titles/Titles'
function Sustainability() {
  return (
    <section className='freatures'>
        <Titles
            title={"Our sustainability commitment"}
            text = {"We strive to form profound partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect. Everything we do is a matter of heart, body and soul."}
        />
        <Card
            title1 = {'Visit us'}
            text1 = 'Find a shop near you'
            title2 = {'Visit us'}
            text2 = 'Find a shop near you'
            title3= {'Visit us'}
            text3 = 'Find a shop near you'
        />
    </section>
  )
}

export default Sustainability