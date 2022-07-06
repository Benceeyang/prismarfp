import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonreturndir} from '../Button.js'
function PeoplePage() {
  return (
    <div>
        People
        <Link to='/'>
    <Buttonreturndir />
    </Link>   
    </div>
  )
}

export default PeoplePage