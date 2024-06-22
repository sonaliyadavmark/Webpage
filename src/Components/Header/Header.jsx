import React from 'react'
import AfiyaIcon from '../../img/Afiya.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
    <div className="left-icon">
        <img src={AfiyaIcon} alt="" />
    </div>
    <div className="right">
        <div>
            <span>second medical Opinion</span><br></br>
            <span><b>Book Consultation</b></span>
        </div>
        <div>
            <span>Call On Us</span><br></br>
            <span><b>4512852545</b></span>
        </div>
        <div>
            <span>Email On Us</span><br></br>
            <span><b>info@gmail.com</b></span>
        </div>
        
    </div>

    </div>
  )
}

export default Header