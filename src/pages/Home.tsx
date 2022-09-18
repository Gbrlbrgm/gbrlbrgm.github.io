import React from 'react'
import './Home.css'
import AppBarDorf  from '../layout/AppBarDorf'
import FooterDorf from '../layout/FooterDorf'
import Card from '../components/Card'

export const Home = () => {
  return (
    <div className="Home">
        <AppBarDorf />
        <Card />
        <FooterDorf />
    </div>
  )
}

export default Home