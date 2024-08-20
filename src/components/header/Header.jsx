import React from 'react';
import "./Header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Header = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500,
      };
  return (
    <div className='header container'>
      <Slider className="left-header">
        <div className="men-header h">
            <div>
            <h2>Men Fashon</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt mollitia nesciunt tempore exercitationem eos nemo.</p>
            <button className='btn-header'>Shop Now</button>
            </div>
        </div>
        <div className="woman-header h">
            <div>
            <h2>Woman Fashon</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt mollitia nesciunt tempore exercitationem eos nemo.</p>
            <button className='btn-header'>Shop Now</button>
            </div>
        </div>
        <div className="kids-header h">
            <div>
            <h2>Kids Fashon</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt mollitia nesciunt tempore exercitationem eos nemo.</p>
            <button className='btn-header'>Shop Now</button>
            </div>
        </div>
      </Slider>
      <div className="right-header">
        <div className="up-header d">
            <div>
            <h3>SAVE 20%</h3>
            <h2>Spacial Offer</h2>
            <button className='btn-header'>Shop Now</button>
            </div>
        </div>
        <div className="down-header d">
            <div>
            <h3>SAVE 20%</h3>
            <h2>Spacial Offer</h2>
            <button className='btn-header'>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
