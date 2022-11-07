import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/stackoverflow-official.svg';
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import '../Navbar/Navbar.css'

const Navbar = () => {
  const User=null;
  return (
    <nav>
        <div className='navbar'>
          <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt="log" />
          </Link>
          <Link to='/' className='nav-item nav-btn'>About</Link>
          <Link to='/' className='nav-item nav-btn'>Products</Link>
          <Link to='/' className='nav-item nav-btn'>For-Teams</Link>

          <form>
            <input type="text" placeholder='Search...'/>
            <img src={search} alt="search-logo" width={18} className='search-icon'/>
          </form>

          {User===null?
            <Link to='/auth' className='nav-item nav-links'>Login</Link>:
            <>
            <Link to='/'><Avatar>M</Avatar></Link>
            <Button>Log Out</Button>
            </>
          
        }
        </div>
    </nav>
  )
}

export default Navbar