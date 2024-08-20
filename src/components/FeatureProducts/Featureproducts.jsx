import React from 'react';
import "./featureproducts.css";
import Fdata from "./Fdata";
import { FaHeart, FaCartPlus , FaStar  } from "react-icons/fa";

const Featureproducts = ({addToCart , addToWatchList}) => {
  return (
    <div className='product-main container'>
        <div className="title">
            <h2>Feature <span>Products</span></h2>
        </div>
        <div className="products">
                {Fdata.map(function(item){
                    return(
                        <div className="product">
                            <img src={item.image} alt="" />
                            <h2>{item.name}</h2>
                            <div className='product-price'>
                                <h3>{item.price}$</h3>
                                <p>{item.prevprice}$</p>
                            </div>
                            <div className="star">
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                            </div>
                            <div className="product-icon">
                                    <button className='feature-icon'><FaHeart /></button>
                                    <button className='feature-icon' onClick={()=>addToCart(item)}><FaCartPlus /></button>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
        </div>
  );
}

export default Featureproducts;
