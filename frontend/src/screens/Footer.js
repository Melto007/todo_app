import React from 'react'
import './footer.css'
import Icon from '../components/Icons'

const Footer = () => {
  return (
    <div className="footer-container fixed bottom-0 w-[100%] bg-black text-white flex justify-between px-[0.2rem] py-[0.8rem] text-[0.7rem] sm:text-[0.9rem] sm:px-[1rem]">
        <p className="tracking-wide">created by @ <span className='text-blue'>melto.sm</span></p>
        <ul className="flex gap-[0.5rem] text-[0.8rem] sm:text-[0.9rem] md:gap-[0.7rem] lg:text-[1rem]">
            <li><a href="https://github.com/Melto007" target="_blank" rel="noopener noreferrer"><Icon className="fa-brands fa-github" /></a></li>
            <li><a href="https://www.linkedin.com/in/shehin-melto-94887a192/" target="_blank" rel="noopener noreferrer"><Icon className="fa-brands fa-linkedin" /></a></li>
            <li><a href="https://twitter.com/melto_official" target="_blank" rel="noopener noreferrer"><Icon className="fa-brands fa-twitter" /></a></li>
        </ul>
    </div>
  )
}
export default Footer