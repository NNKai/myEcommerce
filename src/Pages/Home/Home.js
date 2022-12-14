import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../../Component/FeaturedProducts/FeaturedProducts'
import HeroImg from '../../Images/mainhero.jpg'
import './Home.css'
import Women from '../../Images/womenF.jpg'
import Men from '../../Images/mens.jpg'

const Home = () => {



  return (
    <main>
    <div className='home_Container'>
      <Link to="/"><div className='main_Content'>
      <img src={HeroImg} alt='hero'></img>
       <h3>NK's Collection</h3>
      </div></Link>
      <Link to="./mens"><div className='men_Fashion'>
      <img src={Men} alt='mens'></img>
      <h3>Men's Fashion</h3>
      </div></Link>
      <Link to="./womens"><div className='women_Fashion'>
      <img src={Women} alt='Womans'></img>
       <h3>Women's Fashion</h3>
      </div></Link>
    </div>
    
    <FeaturedProducts />
    </main>
  )
}

export default Home
