import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-pink-400'>
      <Outlet></Outlet>
    </div>
  );
};

export default App;