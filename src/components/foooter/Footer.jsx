import React from 'react';
import "./Footer.css";
import { FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt , FaFacebookF , FaInstagram , FaTwitter ,FaLinkedinIn  } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-flex">
       <div className="one-footer f">
            <h2>GET IN TOUCH</h2>
            <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
            <div className="left-footer-icon">
                <div className="one-icon">
                    <FaLocationDot className='i'/>
                    <p>123 Street, New York, USA</p>
                </div>
                <div className="one-icon">
                <MdEmail className='i'/>
                    <p>123 Street, New York, USA</p>
                </div>
                <div className="one-icon">
                <FaPhoneAlt  className='i'/>
                    <p>123 Street, New York, USA</p>
                </div>
            </div>
        </div>
        <div className="two-footer f">
            <h2>QUICK SHOP</h2>
            <ul>
                <li><a href="">Shop</a></li>
                <li><a href="">Our Shop</a></li>
                <li><a href="">Shop Detail</a></li>
                <li><a href="">Shopping Cart</a></li>
                <li><a href="">Checkout</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
        <div className="three-footer f">
                <h2>MY ACCOUNT</h2>
                <ul>
                <li><a href="">Shop</a></li>
                <li><a href="">Our Shop</a></li>
                <li><a href="">Shop Detail</a></li>
                <li><a href="">Shopping Cart</a></li>
                <li><a href="">Checkout</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
        <div className="four-footer f">
            <h2>NEWSLETTER</h2>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <div>
                <input type="text" value="Your Email Address"/>
                <button>Sign Up</button>
            </div>
            <h3>Follow Us</h3>
            <div className="social-icon">
                <FaFacebookF className='sociall-icon'/>
                <FaInstagram className='sociall-icon'/>
                <FaTwitter className='sociall-icon'/>
                <FaLinkedinIn className='sociall-icon'/>
            </div>
        </div>
       </div>
       <hr />
       <h1>©All Rights Reserved by <span>Rohaym Elgendy</span></h1>
    </div>
  );
}

export default Footer;
