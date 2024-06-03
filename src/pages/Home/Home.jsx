/* eslint-disable no-unused-vars */
import React from 'react'
import "./Home.css"
import Navbarcomponent from '../../components/Navbarcomponent/Navbarcomponent'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQ from '../../components/FAQ/FAQ'
import Homefirst from '../../components/Homefirst/Homefirst'
import Advantages from '../../components/Advantages/Advantages'
import Features from '../../components/Features/Features'
// import Titlecards from '../../components/TitleCards/Titlecards'
const Home = () => {
  return (
    <div className='home'>
      <Navbarcomponent />
      <Homefirst />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home