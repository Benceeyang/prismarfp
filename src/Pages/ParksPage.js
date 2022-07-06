import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, Buttonreturndir, Buttontransportation,Buttondirback, Buttonparkback, Buttondirmenu,Buttondirreturnmenu} from '../Button.js'
function ParksPage() {
  return (
    <div className = 'background'>

        Public Safety and justice Page
        <Link to='/'>
    <Buttondirreturnmenu />
    </Link>   
    <Link to='/dir'>
    <Buttondirmenu />
    </Link>   
    </div>
  )
}

export default ParksPage