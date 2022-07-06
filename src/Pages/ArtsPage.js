import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, 
  Buttonreturndir, Buttontransportation,Buttondirback, Buttonartsback, Buttondirmenu,Buttondirreturnmenu} from '../Button.js'
function ArtsPage() {
  return (
    <div className = 'background'>

        Arts Page
        <Link to='/'>
    <Buttondirreturnmenu />
    </Link>   
    <Link to='/dir'>
    <Buttondirmenu />
    </Link>   
    </div>
  )
}

export default ArtsPage