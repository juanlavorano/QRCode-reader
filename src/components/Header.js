import React from 'react'
import logo from '../brunch.png'
import { FaUserAlt } from 'react-icons/fa';

export default function Header(props) {
 

    return (
        <div>
            <div className='header'>
                <img alt='logo' src={logo} className='header-logo'></img>
                <button className='header-user'><FaUserAlt size={25}/></button>
            </div>
        </div>
    )
}
