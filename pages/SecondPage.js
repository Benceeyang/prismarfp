import React from 'react'
import styles from '../src/css/SecondPage.module.css'
// import Home from '../images/home.jpg'
// import {Link} from 'react-router-dom'
import Clocker from './clocker'
import{Buttonoffices, Buttonpeople, Buttonjobs, Buttondir, Buttonabout, Buttonne} from './Button.js';
import { Router } from 'next/router';
// import styles from "../styles/dateTime.module.css"
import Link from "next/link"; 

function SecondPage() {
  return (
    <div >
      {/* <Clocker className='clocker' />
      <div className= {styles.background}>
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
      </div> */}

    </div>
  )
}
// 
export default SecondPage