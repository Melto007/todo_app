import React from 'react'
import Icons from '../components/Icons'
import Img from '../components/Image'
import Button from '../components/Button'
import './slideBar.css'

const SlideBar = () => {
  return (
    <div className='sideBar w-[60%] h-[87vh] px-[0.2rem] bg-white rounded-tr-lg rounded-br-lg absolute left-0 top-[1rem] sm-screen1:w-[50%] sm-screen1:w-[230px] sm:relative sm:translate-x-0 sm:w-[250px] sm:h-[87vh] sm:py-[1rem] sm:rounded-lg md:w-[240px] lg:w-[220px] lg-screen:w-[280px] xl:w-[300px]'>
        <div className='text-right px-[0.5rem] py-[0.3rem] sm:hidden'>
            <Icons className="fa-solid fa-xmark" />
        </div>
        <div className='text-center'>
            <Img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-File.png" alt="image" className="w-[80px] block mx-auto" />
            <div className='py-[0.3rem] flex justify-center items-center '>
                <div className='w-[80%]'>
                    <p className='font-bold'>Melto.sm</p>
                    <p className='text-blue text-[0.7rem]'><a href='mailto:meltosm8@gmail.com'>meltosm8@gmail.com</a></p>
                </div>
                <div className='px-[0.2rem]'>
                    <Icons className="fa-solid fa-ellipsis-vertical" />
                </div>
            </div>

            <div className=''> 
                <div className='slidebar-todo sm:h-[318px] xl:h-[405px] 2xl:h-[450px]'>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold'>Todo 1</p>
                        <Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" />
                    </div>
                </div>

                <div className='py-[0.6rem] sm:py-[1rem] 2xl:py-[0.4rem]'>
                    <button className="bg-black w-[100%] rounded-lg text-white text-bold py-[0.4rem] text-[0.7rem]" name="add"><Icons className="fa-solid fa-plus" /> add</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SlideBar