import React, { useState } from 'react'
import { account } from '../config/appwrite'
import { ID } from 'appwrite';
// import { useNavigate } from 'react-router-dom'

const Login = () => {
    // const navigate = useNavigate()
    const [register, setRegister] = useState(true)

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })


    const userRegister = async (e) => {
        console.log("success")
        e.preventDefault()

        const promise = account.create(
            ID.unique(),
            user.username,
            user.email,
            user.password
        )

        promise.then((response) => {
            console.log(response)
            // navigate('/menu')
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className="w-[100%] h-screen bg-gradient-to-r from-purple to-pink flex justify-center items-center">
        <div className='flex'>
            {register ? 
                <div className="m-auto w-[280px] h-[50vh] text-center bg-black text-white rounded-lg shadow-lg sm-screen1:w-[300px] md-screem2:h-[40vh] md-screem2:w-[370px]">
                    <h1 className='text-[1.2rem] py-[0.8rem] font-bold md-screem2:text-[1.5rem]'>Todo App</h1>
                    <div className='text-black'>
                        <input type="text" name="username" placeholder='Enter Your UserName' className='px-[0.7rem] py-[0.4rem] rounded-lg mb-[1rem] outline-none' />
                        <input type="password" name="password" placeholder='Enter Your Password' className='px-[0.7rem] py-[0.4rem] rounded-lg mb-[1rem] outline-none ' />
                        <div className='flex items-center gap-[0.4rem] justify-center'>
                            <input type="checkbox" className='block'/> <p className='text-[0.7rem] md-screem2:text-[0.8rem] text-white'>Show Password</p>
                        </div>
                    </div> 
                    <button type="submit" className='block m-auto my-[1rem] bg-blue px-[1.2rem] py-[0.4rem] rounded-lg text-white' >Login</button>
                    <a className='block text-pink underline-offset-1 cursor-pointer' onClick={(e) => setRegister(false)}>sign in</a>
                </div>
            :
                <div className="m-auto w-[280px] h-[50vh] text-center bg-white rounded-lg shadow-lg sm-screen1:w-[300px] md-screem2:h-[55vh] md-screem2:w-[400px]">
                    <h1 className='text-[1.2rem] pt-[0.4rem] font-bold md-screem2:text-[1.5rem]'>Todo App</h1>
                    <div className='text-black'>
                        <input type="text" name="username" placeholder='Enter Your UserName' className='px-[0.7rem] py-[0.4rem] rounded-lg mb-[1rem] outline-none' onChange={(e) => setUser({...user, username: e.target.value})} />
                        <input type="email" name="email" placeholder='Enter Your Email' className='px-[0.7rem] py-[0.4rem] rounded-lg mb-[1rem] outline-none ' onChange={(e) => setUser({...user, email: e.target.value})} />
                        <input type="password" name="password" placeholder='Enter Your Password' className='px-[0.7rem] py-[0.4rem] rounded-lg mb-[1rem] outline-none ' onChange={(e) => setUser({...user, password: e.target.value})} />
                        <input type="password" name="password" placeholder='Enter Your Confirm Password' className='px-[0.7rem] py-[0.4rem] rounded-lg mb-[1rem] outline-none ' />
                    </div> 
                    <button type="submit" className='block m-auto my-[1rem] bg-blue px-[1.2rem] py-[0.4rem] rounded-lg text-white' onClick={userRegister}>Register</button>
                    <a className='block text-pink underline-offset-1 cursor-pointer' onClick={(e) => setRegister(true)}>login</a>
                </div>
            }            
        </div>
    </div>
  )
}

export default Login