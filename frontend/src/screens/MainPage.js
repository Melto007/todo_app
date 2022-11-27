import React from 'react'
import SideBar from './SideBar'
import Footer from "./Footer";
import MainContent from "./MainContent"

const MainPage = () => {
  return (
    <div className="w-[100%] h-screen bg-gradient-to-r from-purple to-pink">
        <div className='sm:flex'>
            <div className='z-10 md-screem2:px-[0.4rem]'>
                <SideBar />
            </div>

            <div className='w-[100%] py-[0.4rem] px-[0.2rem] md-screem2:py-[1rem] md-screem2:px-[1rem]'>
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