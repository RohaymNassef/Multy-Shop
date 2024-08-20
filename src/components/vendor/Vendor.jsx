import React from 'react';
import "./Vendor.css";
import img1 from "../../img/vendor-1.jpg";
import img2 from "../../img/vendor-2.jpg";
import img3 from "../../img/vendor-3.jpg";
import img4 from "../../img/vendor-4.jpg";
import img5 from "../../img/vendor-5.jpg";
import img6 from "../../img/vendor-6.jpg";
import img7 from "../../img/vendor-7.jpg";
import img8 from "../../img/vendor-8.jpg";
const Vendor = () => {
  return (
    <div className='vendor container'>
        <div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
        </div>
    </div>
  );
}

export default Vendor;
