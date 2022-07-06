import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import Clockerr from './Clockerr.js'
import{Buttonoffices, Buttonpeople, Buttonjobs, Buttondir, Buttonabout, Buttonne} from '../Button.js'


function SecondPage() {
  return (
    <div className='background'>
      .
        <Clockerr className='clocker' />
        <Link to ='/job'>
        <Buttonjobs />
        </Link>
        <Link to ='/office '>
        <Buttonoffices />
        </Link>
        <Link to ='/people'>
        <Buttonpeople />
        </Link>
        <Link to ='/dir'>
        <Buttondir />
        </Link>
        <Link to ='/'>
        <Buttonabout />
        </Link>
        <Link to ='/dir'>
        <Buttonne />
        </Link>
    </div>
  )
}

export default SecondPage