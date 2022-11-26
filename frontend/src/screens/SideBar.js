import React from 'react'
import Icons from '../components/Icons'
import Img from '../components/Image'
import './sidebar.css'

const SlideBar = () => {
  return (
    <div className='sideBar w-[250px] h-[87vh] px-[0.2rem] bg-white rounded-tr-lg rounded-br-lg absolute left-0 top-[1rem] sm-screen1:w-[250px] sm:relative sm:translate-x-0 sm:h-[87vh] sm:py-[1rem] sm:rounded-lg md:w-[240px] lg:w-[220px] lg-screen:w-[280px] xl:w-[300px]'>
        <div className='text-right px-[0.5rem] py-[0.3rem] sm:hidden'>
            <Icons className="fa-solid fa-xmark" />
        </div>
        <div className='text-center'>
            <Img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-File.png" alt="image" className="w-[80px] block mx-auto xl:w-[100px]" />
            <div className='py-[0.3rem] flex justify-center items-center '>
                <div className='w-[80%]'>
                    <p className='font-bold xl:text-[1rem]'>Melto.sm</p>
                    <p className='text-blue text-[0.7rem]'><a href='mailto:meltosm8@gmail.com'>meltosm8@gmail.com</a></p>
                </div>
                <div className='px-[0.2rem]'>
                    <Icons className="fa-solid fa-ellipsis-vertical" />
                </div>
            </div>

            <div className=''> 
                <div className='slidebar-todo h-[370px] sm:h-[390px] xl:h-[450px] 2xl:h-[420px]'>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>

                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                    <div className='w-[100%] h-[40px] bg-black text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                        <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                        <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                    </div>
                </div>

                <div className='py-[0.6rem] sm:py-[0.4rem] xl:py-[0.4rem] 2xl:py-[0.4rem]'>
                    <button className="bg-black w-[100%] rounded-lg text-white text-bold py-[0.4rem] text-[0.7rem] xl-screen2:text-[1rem]" name="add"><Icons className="fa-solid fa-plus xl-screen2:text-[1rem]" /> ADD</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SlideBar