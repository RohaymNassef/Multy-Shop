import React, { useEffect, useState } from 'react';
import "./Fake.css";
import { FaHeart , FaCartPlus ,FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Fake = ({addToCart , addToWatchList}) => {
    let[products , setProducts]=useState([]);
    useEffect(function(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data=>{
            setProducts(data);
        })
    } , [])
  return (
    <div className='fake container'>
      <div className="title">
      <h2>Fake Products</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, delectus dignissimos saepe aut, dolorem quos ratione iste esse ullam nemo alias in accusamus soluta nulla ab tempore impedit, aperiam laborum.</p>
      </div>
      <div className="apis">
        {products.map(function(product){
            return(
                <div className="api">
                    <Link to = {`/fakeinfo/${product.id}`}>
                    <img src={product.image} />
                    
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

export default Fake;





/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Prop } from './components/properties/Prop'
import { Cat } from './components/categories/Cat'
import { Projects } from './components/projects/Projects'
import { Com } from './components/compony/Com'
import { Footer } from './components/footter/Footer'
import { Link ,BrowserRouter,Route,Routes } from 'react-router-dom'
import { BsFillArrowUpSquareFill } from "react-icons/bs";import { Shop } from './components/pages/Shop'
import { Shopdatils } from './components/shopdatils/Shopdatils'
import { Datils } from './components/pages/Datils/Datils'
import { Contact } from './components/Contact/Contact'
import { Check } from './components/pages/Check/Check'
import { Cart } from './components/pages/Cart/Cart'
import { Fav } from './components/pages/Fav/Fav'

function App({total}) {
  // scroll
  window.onscroll = function() {
    if (window.scrollY > 0) {
      document.querySelector('.arr').style.display = 'flex';
    } else {
      document.querySelector('.arr').style.display = 'none';
    }
  };

  function scroll(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // add to  cart -------------------
  let [cartitems , setcart] = useState([]);
  function addTocart(product){
    let seleteditem = cartitems.find(items => items.id == product.id)
    if(seleteditem){
      Swal.fire({
        title: "the product is Alredy Added!",
        icon: "warning",
        showCancelButton:false,
        timer:1000
      });
    }
    else{
      Swal.fire({
        title: "add successfully!",
        icon: "success",
        showCancelButton:false,
        timer:1000
      });
      setcart([...cartitems , product])
    }
    // remove from cart
  }
  function removeFromcart(product){
    setcart(cartitems.filter(items=> items.id != product.id))
    Swal.fire({
      title: "removed successfully!",
      icon: "success",
      showCancelButton:false,
      timer:1000
    });
  }
  // add to favorite list
  const[favoritelist , setfavoritelist] = useState([])
  function addTofav(product){
    let selectedit = favoritelist.find(item=> item.id == product.id)
    if(selectedit){
      Swal.fire({
        title: "the product is Alredy Added!",
        icon: "warning",
        showCancelButton:false,
        timer:1000
      });
    }
    else{
      setfavoritelist([...favoritelist, product])
      Swal.fire({
        title: "add successfully!",
        icon: "success",
        showCancelButton:false,
        timer:1000
      });
    }
  }
  // remove from fav
  function removeFromecfav(product){
    setfavoritelist(favoritelist.filter(item=> item.id != product.id))
    Swal.fire({
      title: "removed successfully!",
      icon: "success",
      showCancelButton:false,
      timer:1000
    });
  }
  return (
    <>
    <BrowserRouter>
    <div className='arr'>
      <BsFillArrowUpSquareFill onClick={scroll} className='arow'/>
    </div>
        <Navbar cartitems={cartitems} favoritelist={favoritelist}/>
      <Routes>
         <Route path='/' element={<Header addTofav={addTofav} addTocart={addTocart}/>}/> 
         <Route path='/Shop' element={<Shop  addTofav={addTofav} addTocart={addTocart} />}/> 
         <Route path='/Shopdatils' element={<Shopdatils/>}/> 
         <Route path='/Shop/:id' element={<Datils  addTocart={addTocart}/>}/> 
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Check' element={<Check cartitems={cartitems} total={total}/>}/>
         <Route path='/Cart' element={<Cart  cartitems={cartitems} removeFromcart={removeFromcart}/>}/>
         <Route path='/favorite' element={<Fav removeFromecfav={removeFromecfav} addTocart={addTocart} favoritelist={favoritelist}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App*/ 