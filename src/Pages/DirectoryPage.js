import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, Buttonreturndir, Buttontransportation} from '../Button.js'
function DirectoryPage() {
  return (
    <div className = 'background'>

        Directory Page
    
    <Link to='/'>
    <Buttonreturndir />
    </Link>   
    <Link to='/public'>
    <Buttonpublicsaftey />
    </Link>  
    <Link to='/health'>
    <Buttonhealth />
    </Link> 
    <Link to='/parks'>
    <Buttonparks />
    </Link>  
    <Link to='/cards'>
    <Buttonarts />
    </Link> 
    <Link to='/children'>
    <Buttonchildren />
    </Link>  
    <Link to='/housing'>
    <Buttonhousing />
    </Link> 
    </div>
  )
}

export default DirectoryPage