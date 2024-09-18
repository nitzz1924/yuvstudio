import React from 'react'
import { Link } from 'react-router-dom';
let logo = "/assests/images/finalfinallogo.png";
const header = () => {
  return (
   <div className='headermain'>
    <header>
        <div className="logo">
        <a href="/"><img src={logo}  width="180px" alt="logo"/></a>
        </div>
        <nav>
            <a href="/" >Home</a>
            <a href="/about" >About</a>
            <a href="/#" >Advertising</a>
            <a href="/contact" >Contact</a>
        </nav>
    </header>
   </div>
  )
}
export default header;