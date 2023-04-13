import React from 'react';
import { Link } from 'react-router-dom';

const Novel = () => {
    return (
        <div>

            <h1 className='text-2xl text-white font-bold p-4'>এ গোল্ডেন এজ</h1>
           <div className='pb-40'>
           <Link to='/golden'><button className='btn-primary'>Click and Read</button></Link>
           </div>
        </div>
    );
};

export default Novel;