import React from 'react'
import Navbar from '../components/Navbar'
import HomeHeader from '../components/HomeHeader'
import HomeHeadlines from '../components/HomeHeadlines'
import HomeTech from '../components/HomeTech'
import HomeBusi from '../components/HomeBusi'
import HomeSports from '../components/HomeSports'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeHeader/>
        <HomeHeadlines/>
        <HomeTech/>
        <HomeBusi/>
        <HomeSports/>
        <Footer/>
    </div>
  )
}

export default Home
