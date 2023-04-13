import React from 'react';

import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold text-pink-0'>Welcome Dost <br/> My First <br /> Creation</h1>
            <h1 className='text-4xl text-white text-center mt-20'>
            <span className='text-violet-500'>শুভ</span> নববর্ষ <span className='text-violet-500'>দোস্ত</span>
</h1>

<p className='p-3 text-white text-center mt-20 mb-12'>
নিচের বাটন টি ক্লিক করুন এবং 
পড়ুন আপনারা পছন্দের উপন্যাস,  কবিতা, ছন্দ </p>

<div className='text-center '>
<Link to='/button'><button className='btn-primary'>Click Me</button></Link>
</div>
<p className='text-center mt-3 text-2xl font-bold text-white pb-20'>Don't forget Click Button</p>
        </div>
    );
};

export default Home;