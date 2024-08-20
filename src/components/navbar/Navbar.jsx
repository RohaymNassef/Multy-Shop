import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { FaHeart , FaShoppingCart,FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = ({cartItems ,  watchlist , changeThem , dark}) => {
  let [openMenu ,setOpenMenu] = useState(false);
  function isOpen(){
      setOpenMenu(!openMenu);
  }
  function close(){
    setOpenMenu(false);
  }
  // menu list .......



  function click(){
    document.querySelector(".ul").classList.toggle("open")
  }


 

  return (
    <nav>
      <div className='navbar'>
      <div className="navbar-flex">
      <div className="left-navbar">
            <h2>MULTI <span> SHOP</span></h2>
      </div>
      <div className="center-navbar">
        <ul className='ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <div className="pages" onClick={isOpen}>
            <li className='links'><a href="">Products</a>
                {openMenu && <div className="link">
                 <li><Link to="/fake" onClick={close}>Fake Api</Link></li> 
                  <li><Link to="/dummy" onClick={close}>Dummy Api</Link></li>
                </div>}
            </li>
            <span><FaChevronDown className='arwo'/></span>
            </div>
            <li><Link to='/contact'>Contact</Link></li>
            <div className="change-them">
          {dark?<li><MdOutlineWbSunny className='sun' onClick={()=>changeThem()}/></li>:
          <li><FaRegMoon className='moon' onClick={()=>changeThem()}/></li>
          }
        </div>
        </ul>
      </div>
      <div className="right-navbar">
            <div className="whatlist">
            <Link to = '/watchlist'>
            <FaHeart className='nav-icon'/>
            </Link>
            <span>({watchlist.length})</span>
            </div>
            <div className="shoping">
            <Link to = "/cart">
            <FaShoppingCart className='nav-icon'/>
            </Link>
            <span>({cartItems.length})</span>
            </div>
      </div>
      <GiHamburgerMenu className='menuu' onClick={click}/>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
