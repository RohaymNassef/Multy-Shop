import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./watchlist.css"
const WatchList = ({watchlist , addToCart ,removeFromWatchList}) => {
  return (
    <>
   {watchlist.length == 0 ?
   <h2 className='Not-find container'>Not Find Product To Show It</h2>:
   <div className="watchlist container">
   {watchlist.map(function(item){
     return(
       <div className="watch-contact">
         <img src={item.image ? item.image : item.thumbnail} alt="" />
         <h2>{item.title.slice(0 , 10)}</h2>
         <h3>{item.price}$</h3>
         <div className="btn-watch">
             <FaCartPlus className='btn-w' onClick={() => addToCart(item)}/>
             <IoIosCloseCircleOutline className='btn-x' onClick={() => removeFromWatchList(item)}/>
         </div>
       </div>
     )
   })}
 </div>
  }
    </>
  );
}

export default WatchList;
