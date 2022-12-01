import React from 'react'
import Icons from '../components/Icons'
import Input from '../components/Input'
import './js/sidebar'

const MainContent = () => {
  return (
    <div>
      <div className='w-[100%] h-auto py-[0.8rem] px-[0.8rem] bg-blue text-white rounded-lg text-[0.7rem] md-screem2:text-[1rem]'>
          <div className='flex justify-between items-center'>
              <div className='menuBar cursor-pointer flex justify-between items-center'>
                  <Icons className="fa-solid fa-bars mr-[0.4rem] md-screem2:hidden" />
                  <h2 className='text-extrabold md-screem2:text-[1.3rem]'>Todo</h2>
              </div>

              <div className='flex justify-between items-center'>
                  <Input type="text" className="mx-[0.4rem]  text-white rounded-lg px-[0.4rem] bg-blue outline-none" name="search"/>
                  <Icons className="fa-solid fa-plus" />
              </div>
          </div>
      </div>

      <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
      </div>
    </div>
  )
}

export default MainContent