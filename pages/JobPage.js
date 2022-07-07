import React from 'react'
import './SecondPage.css'
import Home from '../public/images1/home.jpg';
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, Buttonreturndir, Buttontransportation,Buttondirback, Buttonparkback, Buttondirmenu,Buttondirreturnmenu, Buttonjobhome} from '../Button.js'
function JobPage() {
  return (
    <div className = 'background'>

    
        <Link to='/'>
    <Buttonjobhome/>
    </Link>   
    
    </div>
  )
}

export default JobPage