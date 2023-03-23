import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className='Nav'>
           <Link to="">Home</Link>
           <Link to="">About</Link>
           <img className='logo' src='musically-repaired-logo.png' alt='logo' />         
           <Link to="">Our Shops</Link>
           <Link to="">Services</Link>
        </div>
    );
};