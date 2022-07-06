import React from 'react'
import {Link} from 'react-router-dom'
import{Button2, Buttonoffices, Buttonjobs} from '../Button.js'
function ThirdPage() {
  return (
    <div>
        ThirdPage
    <Link to='fourth'>
    <Buttonjobs />
    </Link>   
    <Link to ='/ '>
        <Buttonoffices />
        </Link>
    </div>
  )
}

export default ThirdPage