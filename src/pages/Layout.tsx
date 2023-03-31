import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

//this file handles the general layout for all of the files
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
