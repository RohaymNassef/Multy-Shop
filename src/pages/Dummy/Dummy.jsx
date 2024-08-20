import React, { useEffect, useState } from 'react';
import "./Dummy.css";
import { FaHeart , FaCartPlus ,FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Dummy = ({addToCart , addToWatchList}) => {
    let[products , setProducts]=useState([]);
    useEffect(function(){
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data=>{
            setProducts(data.products);
        })
    },[])
  return (
    <div className='dummy container'>
      <div className="title">
      <h2>Fake Products</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, delectus dignissimos saepe aut, dolorem quos ratione iste esse ullam nemo alias in accusamus soluta nulla ab tempore impedit, aperiam laborum.</p>
      </div>
      <div className="apis">
        {products.map(function(product){
            return(
                <div className="api">
                <Link to = {`/infodummy/${product.id}`}>
                <img src={product.thumbnail} alt="" />
                </Link>
                    <h3>{product.title.slice(0 , 20)}</h3>
                    <div>
                        <FaHeart className='api-icon' onClick={() => addToWatchList(product)}/>
                        <FaCartPlus  className='api-icon' onClick={() => addToCart(product)}/>
                    </div>
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default Dummy;
