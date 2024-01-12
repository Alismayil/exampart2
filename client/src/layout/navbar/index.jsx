import React, { useState } from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Navbar() {

  const [isOpenNavbar, setIsOpenNavbar] = useState(false)

  function handleOpenNavbar() {
    setIsOpenNavbar(!isOpenNavbar)
    
  }
  return (
    <nav>
       <Link style={{textDecoration:"none"}} className='link' to={"/"}>   <h1>Floral Studio</h1></Link>

   
      <ul>
        <li><Link className='link' to={"/"}>Home</Link></li>
        <li><Link className='link' to={"/basket"}>Basket</Link></li>
        <li><Link className='link' to={"/wishlist"}>Wishlist</Link></li>
        <li><Link className='link' to={"/pricing"}>Pricing</Link></li>
        <li><Link className='link' to={"/contacts"}>Contacts</Link></li>
        <li><Link className='link' to={"/add"}>Add</Link></li>
      </ul>
        
      <div className='respNavMenu' onClick={handleOpenNavbar}>
      {isOpenNavbar ?<IoMdClose />:<IoIosMenu /> }
      </div>
      <div className={`resNav ${isOpenNavbar ? 'openNavbar' :''}`}>
      <ul>
        <li><Link className='link' to={"/"}>Home</Link></li>
        <li><Link className='link' to={"/basket"}>Basket</Link></li>
        <li><Link className='link' to={"/wishlist"}>Wishlist</Link></li>
        <li><Link className='link' to={"/pricing"}>Pricing</Link></li>
        <li><Link className='link' to={"/contacts"}>Contacts</Link></li>
        <li><Link className='link' to={"/add"}>Add</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar