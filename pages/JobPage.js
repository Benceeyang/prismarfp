import React from 'react'
import styles from '../src/css/JobPage.module.css';
import Home from '../public/images1/home.jpg';
import {Link} from 'react-router-dom'
import{Buttonjobhome} from './Button.js'
function JobPage() {
  return (
    <div className = {styles.Jobhome}>
      
        <Link href='http://localhost:3000'>
          <Buttonjobhome/>
        </Link>   

    </div>
  )
}

export default JobPage