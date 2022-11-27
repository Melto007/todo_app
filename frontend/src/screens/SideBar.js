import React from 'react'
import Icons from '../components/Icons'
import Img from '../components/Image'
import './sidebar.css'
import './js/sidebar'

const SlideBar = () => {
  return (
    <>
        <div className='sideBar w-[250px] h-[590px] px-[0.2rem] bg-black opacity-75 rounded-tr-lg rounded-br-lg absolute left-0 top-[1rem] md-screem2:relative  sm:h-[600px] sm:rounded-lg md-screem2:h-[780px] xl:w-[260px] xl:w-[300px] 2xl:h-[640px]'>
            <div className='text-right px-[0.5rem] py-[0.3rem] md-screem2:hidden text-white'>
                <Icons className="fa-solid fa-xmark" />
            </div>
            <div className='text-center'>
                <Img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-File.png" alt="image" className="w-[80px] pt-[0.4rem] block mx-auto xl:w-[100px]" />
                <div className='py-[0.3rem] flex justify-center items-center '>
                    <div className='w-[80%]'>
                        <p className='font-bold xl:text-[1rem] text-white'>Melto.sm</p>
                        <p className='text-pink text-[0.7rem]'><a href='mailto:meltosm8@gmail.com'>meltosm8@gmail.com</a></p>
                    </div>
                    <div className='px-[0.2rem]'>
                        <Icons className="fa-solid fa-ellipsis-vertical" />
                    </div>
                </div>

                <div> 
                    <div className='slidebar-todo h-[410px] sm:h-[425px] md-screem2:h-[630px] xl:h-[615px] 2xl:h-[470px]'>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>

                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>

                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>

                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>

                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                        <div className='w-[100%] h-[40px] bg-blue opacity-100 text-white flex justify-between items-center rounded-lg my-[0.3rem]'>
                            <p className='px-[0.4rem] text-[0.7rem] text-bold xl:text-[1rem]'>Todo 1</p>
                            <button><Icons className="fa-solid fa-chevron-right px-[0.4rem] text-[0.7rem] text-bold" /></button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </>
  )
}

export default SlideBar