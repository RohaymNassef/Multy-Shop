import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import "./App.css";
import Footer from './components/foooter/Footer';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"
import Home from './pages/home/Home';
import About from './pages/About/About';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import Fake from './pages/Fake/Fake';
import Dummy from './pages/Dummy/Dummy';
import Fakeinfo from './pages/Fake/Fakeinfo';
import Infodummy from './pages/Dummy/Infodummy';
import Carts from './pages/carts/Carts';
import Swal from 'sweetalert2';
import WatchList from './pages/WatchList/WatchList';







const App = () => {

// Add To Cart Code Important.....

          let[cartItems , setCartItems] = useState([]);
          function addToCart(product){
          let selectItem = cartItems.find(item => item.id == product.id)
            if(selectItem){
              Swal.fire({
                title: "This Product Are Added",
                icon: "warning",
                timer:2000,
                showConfirmButton: false,
              });
            }else{
              setCartItems([...cartItems , product])
              Swal.fire({
                title: "You Added To Cart",
                icon: "success",
                timer:2000,
                showConfirmButton: false,
              });
            }
          }
          function removeToCart(product){
            setCartItems(cartItems.filter(items=> items.id != product.id))
            Swal.fire({
              title: "Removed",
              icon: "error",
              timer:2000,
              showConfirmButton: false,
            });
          }

// Add to watch list .........
          let[watchlist , setWitchList]=useState([]);
          function addToWatchList(product){
            let selectItem = watchlist.find(item => item.id == product.id)
            if(selectItem){
              Swal.fire({
                title: "This Product Are Added",
                icon: "warning",
                timer:2000,
                showConfirmButton: false,
              });
            }else{
              setWitchList([...watchlist , product])
              Swal.fire({
                title: "You Added To Watch List",
                icon: "success",
                timer:2000,
                showConfirmButton: false,
              });
            }
          }

          function removeFromWatchList(product){
            setWitchList(watchlist.filter(item => item.id != product.id))
            Swal.fire({
              title: "Removed",
              icon: "error",
              timer:2000,
              showConfirmButton: false,
            });
          }


          // dark modeeeeee......
          let [dark , setDark]=useState(true);
          function changeThem(){
            setDark(!dark);
          }

  return (
    <div className={dark? "app-dark" : "app"}>
      <BrowserRouter>
      <Navbar cartItems={cartItems}  watchlist={watchlist} dark = {dark} changeThem={changeThem}/>
      <Routes>
        <Route path='/' element ={<Home addToWatchList ={addToWatchList} addToCart={addToCart}/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/shop' element= {<Shop/>}/>
        <Route path='/watchlist' element= {<WatchList watchlist={watchlist} addToCart={addToCart} removeFromWatchList={removeFromWatchList}/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/fake' element= {<Fake addToCart = {addToCart} addToWatchList ={addToWatchList} />} />
        <Route path='/dummy' element= {<Dummy addToCart = {addToCart} addToWatchList ={addToWatchList}/>}/>
        <Route path='/fakeinfo/:id' element= {<Fakeinfo addToCart = {addToCart}/>}/>
        <Route path='/infodummy/:id' element= {<Infodummy addToCart = {addToCart}/>}/>
        <Route path='/cart' element = {<Carts cartItems = {cartItems} removeToCart={removeToCart}/>}/>
       
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
