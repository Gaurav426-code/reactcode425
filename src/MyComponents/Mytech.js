import React from 'react'
import Mobileheader from './Header'
import Mobilesidebar from './Sidebar'
import Mobilehomepage from './MainLayout'
import Mobilefooter from './Footer'
import { Outlet } from 'react-router-dom'

function Mymobilepage() {
  return (
    <div className='container-fluid'>
        <div className='row fixed-top'>
            <div className='col-8'>
                <Mobileheader/>
            </div>
        </div>
        <div className='row '>
          <div className='col-12'>
           <Mobilesidebar/>
          </div>
          <div className='col-md-10'>
           <Outlet></Outlet>
          </div>
          
        </div>
        <div className='row-fixed'>
            <div className='-12'>
              <Mobilefooter/>
            </div>
        </div>
    </div>
  )
}

export default Mymobilepage