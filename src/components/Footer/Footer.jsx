/* eslint-disable no-unused-vars */
import React from 'react'
import "./Footer.css"
import fire from '../../assets/fire.png'
import phone_icon from '../../assets/phone_icon.png'
import email_icon from '../../assets/email_icon.png'
// import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="main_footer">
      <ul>
        <li><img src={fire} alt="" /><span>UiFry</span></li>
        <li><span>Links</span></li>
        <li><span>Legal</span></li>
        <li><span>Product</span></li>
        <li><span>Newsletter</span></li>
        <li><img src={email_icon} alt="" />Help@Frybix.com</li>
        <li>Home</li>
        <li>Terms of Use</li>
        <li>Take Tour</li>
        <li>Stay Up To Date</li>
        <li><img src={phone_icon} alt="" />+123456789</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Live Chat</li>
        <li id="empty"> </li>
        <li id="empty"> </li>
        <li>Bookings</li>
        <li>Cookie Policy</li>
        <li>Reviews</li>
        <li><input type="text" placeholder='Your Email' /><button>Subscribe</button></li>
        <li></li>
        <li>Blog</li>
      </ul>
      </div>
      <div className="mobile_footer">
      <div className="inner_left_footer">
          <ul>
            <li>Links</li>
            <li>Legal</li>
            <li>Product</li>
            <li>Newsletter</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="inner_right_footer">
          <ul>
            <li><img src={fire} alt="" /><span>UiFry</span></li>
            <li><img src={email_icon} alt="" />Help@Frybix.com</li>
            <li><img src={phone_icon} alt="" />+123456789</li>
            <li><img src="" alt="" />Stay Up To Date</li>
            <li><img src="" alt="" />Privacy Policy</li>
            <li><img src="" alt="" />Cookie Policy</li>
            <li><input type="text" placeholder='Your Email' /><button>Subscribe</button></li>
          </ul>
        </div>
        
      </div>

      <hr />
      <p className="copyright-text">Copyright 2022 Uifry.com All Rights reserved.</p>
    </div>
  )
}

export default Footer
