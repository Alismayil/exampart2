import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer>
<div className="footerLeft">
    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
    <div className="inputBox">
        <input type="text" placeholder='Your Email' />
        <button>Send</button>
    </div>
</div>
<div className="footerRight">
    <ul>
        <li style={{fontSize:"30px",marginBottom:"10px"}}>About</li>
        <li>About Us
        <div className="line"></div>
        </li>
        <li>Our Partners
        <div className="line"></div>
        </li>
        <li>Our Services
        <div className="line"></div>
        </li>

    </ul>
    <ul>
        <li style={{fontSize:"30px",marginBottom:"10px"}}>Contact</li>
        <li>Contact Us
        <div className="line"></div>
        </li>
        <li>FAQ Page
        <div className="line"></div>
        </li>
        <li>About Me
        <div className="line"></div>
        </li>

    </ul>
    <ul>
        <li style={{fontSize:"30px",marginBottom:"10px"}}>Follow Us</li>
        

    </ul>
</div>
    </footer>
  )
}

export default Footer