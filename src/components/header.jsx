import React from 'react'
let logo = "/assests/images/newfinal.png";
const header = () => {
  return (
   <>
    <header>
        <div className="logo">
            <img src={logo}  width="220px" alt="logo"/>
        </div>
        <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Advertising</a>
            <a href="">Contact</a>
        </nav>
    </header>
   </>
  )
}
export default header;