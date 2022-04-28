import React from 'react';
import logo from './motley.webp';
import './image.css'

console.log(logo);

function Header(){
    return <img src={logo} className='motley' alt='motely' />;
}

export default Header