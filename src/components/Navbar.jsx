import React from 'react';
import Logo from '../images/logo2.png';
import {FaAlignRight} from 'react-icons/fa';
import {BsCart2,BsBell} from 'react-icons/bs';
import { IconContext } from "react-icons";
import {NavLink} from 'react-router-dom';

export default function Navbar({isOpen,notification,turnoff,handleToggle,toggleNotification}) {

    return (
        <div onClick={(isOpen || notification ? turnoff : null)}>
            <nav className='navbar'>
                    <div className='nav-center'>
                        <div className='nav-header'>
                            <a href='/'>
                                <img src={Logo} alt='logo'/>
                            </a>
                            <div className="nav-footer-mobile">
                        <input type='search' placeholder='Search...'/>
                        <IconContext.Provider
                        value={{ color: '#828282', size: '1.5em' }}
                        >
                            <button className='red-note'>
                                <BsCart2  />
                            </button>
                        </IconContext.Provider>
                        <IconContext.Provider
                        value={{ color: '#828282', size: '1.5em' }}
                        >
                            <button className='red-note'  onClick={toggleNotification}>
                                <BsBell />
                                <span>3</span>
                                {notification ? (
                                    <div className="notifications">
                                        <div className="notifications-content">
                                            <div className="single-notification">
                                                <BsBell />
                                                <div className="notification-text">
                                                    example notification Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, maxime? Laborum similique dolorum ex ipsa, vero sunt fugit, non nobis molestias ipsum minima consequatur nam assumenda suscipit molestiae eos. Laudantium .
                                                </div>
                                            </div>
                                            <div className="single-notification">
                                                <BsBell />
                                                <div className="notification-text">
                                                    example notification Lorem ipsum dolor sit amet .
                                                </div>
                                            </div>
                                            <div className="single-notification">
                                                <BsBell />
                                                <div className="notification-text">
                                                    example notification Lorem ipsum dolor sit amet .
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ):null}
                            </button>
                        </IconContext.Provider>
                        <button type='button' className='nav-btn' onClick={handleToggle}>
                                <FaAlignRight  className='nav-icon'/>
                        </button>
                        </div>

                        </div>
                        <div className="navbar-body">
                            
                            <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/'>Favorite</a>
                            </li>
                            <li>
                                <NavLink to='/login'>Login</NavLink>
                            </li>
                        </ul>
                        <div className="nav-footer">
                        <input type='search' placeholder='Search...'/>
                        <IconContext.Provider
                        value={{ color: '#828282', size: '1.5em' }}
                        >
                            <button className='red-note'>
                                <BsCart2  />
                            </button>
                        </IconContext.Provider>
                        <IconContext.Provider
                        value={{ color: '#828282', size: '1.5em' }}
                        >
                            <button className='red-note' onClick={toggleNotification}>
                                <BsBell />
                                <span>3</span>
                                {notification ? (
                                    <div className="notifications">
                                        <div className="notifications-content">
                                            <div className="single-notification">
                                                <BsBell />
                                                <div className="notification-text">
                                                    example notification Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum magnam sapiente laboriosam deserunt magni quidem, cupiditate vitae fugiat sunt numquam doloremque, eaque nesciunt odio. Nesciunt voluptatibus cumque aliquam soluta .
                                                </div>
                                            </div>
                                            <div className="single-notification">
                                                <BsBell />
                                                <div className="notification-text">
                                                    example notification Lorem ipsum dolor sit amet .
                                                </div>
                                            </div>
                                            <div className="single-notification">
                                                <BsBell />
                                                <div className="notification-text">
                                                    example notification Lorem ipsum dolor sit amet .
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ):null}
                            </button>
                        </IconContext.Provider>
                        </div>
                        </div>
                        
                    </div>
                </nav>
        </div>
    )
}
