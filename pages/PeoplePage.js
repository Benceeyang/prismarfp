import React from 'react'
import '../src/css/buttons.modules.css'
import Home from '../public/images1/home.jpg'
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