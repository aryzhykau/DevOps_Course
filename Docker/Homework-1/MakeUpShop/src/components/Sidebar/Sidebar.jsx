import SidebarBrand from './SidebarBrand/SidebarBrand';
import SidebarType from './SidebarType/SidebarType';
import React from 'react';

const Sidebar = () => {
  
  return(
    <>
      <div className='sidebar'>
        <SidebarBrand />
        <SidebarType />
      </div>
    </>
  );
};

export default Sidebar;
