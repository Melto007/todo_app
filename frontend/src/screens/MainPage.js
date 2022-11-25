import React from 'react'
import SlideBar from './SlideBar'
import Footer from "./Footer";
import MainContent from "./MainContent"

const MainPage = () => {
  return (
    <div className="w-[100%] h-screen bg-gradient-to-r from-purple to-pink">
        <div className='sm:flex'>
            <div className='z-10 sm:px-[1rem]'>
                <SlideBar />
            </div>

            <div className='sm:py-[1.4rem] sm:px-[1rem]'>
                <MainContent />
            </div>
        </div>

        <div className="z-0">
            <Footer />
        </div>
    </div>
  )
}

export default MainPage