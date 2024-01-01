import React from 'react';
import Navigation from '../navigation/navigation';
// import Outlet
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className='root'>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default Root;