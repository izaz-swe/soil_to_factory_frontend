import React from 'react'
import HomePageContent from './HomePageContent'
import Header from '../features/home/ContainerHome/Header/Header'
import Footer from '../features/home/ContainerHome/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HomePageContent/>
         <Footer/>
    </div>
  )
}

export default HomePage