import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const RootLayout = () => {
 return (
    <div className="bg-[#EAECED]">
      <div className="">
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;