import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, Buttonreturndir, Buttontransportation,Buttondirback, Buttontransportback} from '../Button.js'
function TransportationPage() {
  return (
    <div className = 'background'>

        Transportation Page
        <Link to='/'>
    <Buttonreturndir />
    </Link>   
    <Link to='/dir'>
    <Buttontransportback />
    </Link>   
    </div>
  )
}

export default TransportationPage