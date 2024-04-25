import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import logo from "../../images/logo.PNG"

export const Offcanvas = () => {
  return (
  <>
<div className='row  p-2 d-flex justify-content-between'>
    <div className='col-10 '>
        <img className='w-25 ' src={logo}></img>
    </div>
    <div className='col-2'>
    <Icon icon="flowbite:bars-outline" width="48" height="48"  style={{color: "black"}} />
    </div>
</div>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
  </>
  )
}
