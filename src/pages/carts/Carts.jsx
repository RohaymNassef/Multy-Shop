import React from 'react';
import "./Carts.css";
const Carts = ({cartItems , removeToCart}) => {
    let totle = 0;
  return (
    <>
    {cartItems.length == 0 ?
    <h2 className='no-product container'>Not Find Product</h2>:
    <div className='cart container'>
        <div className="cart-products">
          {cartItems.map(function(item){
            totle = totle + item.price;
            return(
                <div className="cart-product">
                    <img src={item.image ? item.image : item.thumbnail} alt="" />
                    <h2>{item.price}$</h2>
                    <button onClick={() =>removeToCart(item)}>Remove From Cart</button>
                </div>
            )
          })}
        </div>
        <div className="totle">
            <h2>Totle Price</h2>
            <h3>{totle}$</h3>
        </div>
    </div>
    }
    </>
  );
}

export default Carts;
