import React from 'react';
import "./Service.css";
import { FaArrowRightArrowLeft , FaTruck ,FaPhoneVolume } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
const Service = () => {
  return (
    <div className='services container'>
        <div className="service">
            <div>
               <FaCheck className='service-icon'/>
               <h3>Quality Product</h3> 
            </div>
        </div>
        <div className="service">
            <div>
               <FaTruck className='service-icon'/>
               <h3>Free Shipping</h3> 
            </div>
        </div>
        <div className="service">
            <div>
               <FaArrowRightArrowLeft className='service-icon'/>
               <h3>14-Day Return</h3> 
            </div>
        </div>
        <div className="service">
            <div>
               <FaPhoneVolume  className='service-icon'/>
               <h3>24/7 Support</h3> 
            </div>
        </div>
    </div>
  );
}

export default Service;
