import SideNavbar_left from '@/app/Components/SideNavbar/SideNavbar_left';
import SideNavbar_Right from '@/app/Components/SideNavbar/SideNavbar_Right';
import React from 'react'

const layout = ({ children }) => {
  return <div className='flex justify-between items-center'>
    <SideNavbar_left/>
    {children}
    <SideNavbar_Right/>
  </div>;
};

export default layout