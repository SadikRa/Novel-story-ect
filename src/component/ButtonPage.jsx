import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPage = () => {
    return (
        <div>
            <div className='text-center'>
            <h1 className='text-2xl text-white font-bold p-4'>Read 10 Best Novel</h1>
            <Link to='/novel'><button className='btn-primary'>Read Novel</button></Link>
            <h1 className='text-2xl text-white font-bold p-4'>Read 10 Best Poem</h1>
            <button className='btn-primary'>Read Poem</button>
            <h1 className='text-2xl text-white font-bold p-4'>Read 10 Best Reythms</h1>
            <button className='btn-primary'>Read Reythms</button>
            <h1 className='text-2xl text-white font-bold p-4'>Read 10 Best Story</h1>
            <button className='btn-primary'>Read Story</button>
            </div>
        </div>
    );
};

export default ButtonPage;