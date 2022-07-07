import React from 'react'
// import Home from '../images/home.jpg'
// import {Link} from 'react-router-dom'
// import styles from 
// import Clocker from './clocker'
import{Buttonoffices, Buttonpeople, Buttonjobs, Buttondir, Buttonabout, Buttonne} from './Button.js';
import { Router } from 'next/router';
// import styles from "../styles/dateTime.module.css"
import Link from "next/link"; 
import Timer from './timer';

function SecondPage() {
  return (
    <div>
      <Timer className='Timer' />;
      {/* { <Clocker className='clocker' /> */}

      <div>
        { <Link href ='http://localhost:3000/job'>
        <Buttonjobs />
        </Link> }

        <Link href ='http://localhost:3000/office'>
        <Buttonoffices />
        </Link>
        
        <Link href ='http://localhost:3000/people'>
        <Buttonpeople />
        </Link>

      
        <Link to ='/dir'>
        <Buttondir />
        </Link> 

        {/* <Link to ='/'>
        <Buttonabout />
        </Link>
        <Link to ='/dir'>
        <Buttonne />
  </Link>   */}
      </div>

    </div>
  )
}
// 
export default SecondPage