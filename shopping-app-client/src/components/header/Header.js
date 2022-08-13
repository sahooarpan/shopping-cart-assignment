import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import SabkaBazzar from "../../public/assets/logo.png";
import  './header.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  const navigate = useNavigate();
 
  return (
    <header className='header'>
    <div className='heder_links'>
      
      <img className='logo' src={SabkaBazzar} alt={'Sabka Bazzar'} onClick={()=>navigate('/')} />
      <nav className='nav_links'>
      <Link className='nav_link' to='/' tabIndex={2}>
        Home
        </Link>
        <Link className='nav_link' to='/products'>
        Products
        </Link>
      

      </nav>
      


      </div>
      <nav className='auth_links'>

      <Link className='nav_link' to='/'>
        SignIn
        </Link>
        <Link className='nav_link' to='/register'>
        Register
        </Link>
<div className='shopping-cart'>
<FontAwesomeIcon icon={faShoppingCart}/>
<span className='cart_item-count'> 0 items</span>
</div>        

      
  

      </nav>

    </header>
  )
}

export default Header