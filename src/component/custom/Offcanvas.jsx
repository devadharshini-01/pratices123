import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import logo from "../../images/logo.webp"
import Sidebar from './Sidebar'

export const Offcanvas = ({setActiveSidebar,activeSidebar}) => {
  const [sidebarOpen,setSidebarOpen]=useState(false)
  const handleSidebar=()=>{
    setSidebarOpen(!sidebarOpen)
  }
  return (
  <>
<div className='row  p-2 d-flex justify-content-between'>
    <div className='col-10 '>
        <img className='w-75 ' src={logo}></img>
    </div>
    <div className='col-2'>
    <Icon onClick={()=>handleSidebar()} className='red-color' icon="flowbite:bars-outline" width="25" height="25"  />
    </div>
</div>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
 
  </div>
<div class="offcanvas-body">
<Sidebar setActiveSidebar={setActiveSidebar} activeSidebar={activeSidebar} />
  </div>
</div>
  </>
  )
}
