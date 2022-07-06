import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, Buttonreturndir,
   Buttontransportation,Buttondirback, Buttonchildrenback,Buttondirmenu,Buttondirreturnmenu} from '../Button.js'
function ChildrenPage() {
  return (
    <div className = 'background'>

        Children Page
        <Link to='/'>
    <Buttondirreturnmenu />
    </Link>   
    <Link to='/dir'>
    <Buttondirmenu/>
    </Link>   
    </div>
  )
}

export default  ChildrenPage