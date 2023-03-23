import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className='Nav'>
           <Link to="">Home</Link>
           <Link to="">About</Link>
           <Link to="">Our Shops</Link>
           <Link to="">Services</Link>
        </div>
    );
};