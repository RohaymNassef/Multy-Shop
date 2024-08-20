import React from 'react';
import Featureproducts from '../../components/FeatureProducts/Featureproducts';
import img from "../../img/i.webp";
import "./About.css";
const About = () => {
  return (
    <div className='about container'>
      <div className="title">
      <h2>About <span>Us</span></h2>
      </div>
        <div className="about-flex">
        <div className="left-about">
            <img src={img} alt="" />
        </div>
        <div className="right-about">
            <h2>Welcome In Multi Shop</h2>
            <p><span>Multi Shop</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus cupiditate id ea perferendis necessitatibus repellendus vel obcaecati veniam numquam ducimus non veritatis temporibus qui in dolores, dolore vitae facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid sequi possimus facere dicta beatae! Odio, a? Vel et, recusandae tempore dolorum quae, voluptatibus atque sequi nisi odio, doloremque doloribus.</p>
            <button>Shop Now</button>
        </div>
        </div>
    </div>
  );
}

export default About;
