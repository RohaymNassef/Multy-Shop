import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Infodummy = ({addToCart}) => {
    let{id}=useParams();
    let[product , setProduct]=useState([]);
    useEffect(function(){
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data=>{
            setProduct(data);
        })
    } , [])
  return (
    
    <div className='product-info container'>
        <div className="info-image">
        <img src={product.thumbnail} alt="" />
        </div>
        <div className="product-details">
            <h2>{product.category}</h2>
            <h3> {product.title} </h3>
            <p>{product.description}</p>
            <div>
               <FaStar className='info-icon'/> 
               <FaStar className='info-icon'/> 
               <FaStar className='info-icon'/> 
               <FaStar className='info-icon'/> 
               <FaStar className='info-icon'/> 
            </div>
            <h4>Price:{product.price}$</h4>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Infodummy;
