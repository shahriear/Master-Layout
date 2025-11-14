import SideNavbar_left from '@/app/Components/SideNavbar/SideNavbar_left';
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className='flex  text-center'>
    <SideNavbar_left/>
    {children}
  </div>
  ) 
};

export default layout