import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
// import {Link} from 'react-router-dom';
import logo from './images/maskgroup.jpg';
import photo from './images/PIXELS.jpg'
import picture from './images/frameten.jpg'
import Clocker from '../pages/clocker'
import SecondPage from './SecondPage';
import { Router } from 'next/router';
// import Router from "./Router";
import Link from "next/link";


const slides = [
    logo, 
    photo,
    picture
  ]
  
  export default function FirstPage() {
    const [index, set] = useState(0)
    const transitions = useTransition(index, {
      key: index,
      from: { opacity: 0},
      enter: { opacity: 2 },
      leave: { opacity: -10},
      config: { duration: 3000 },
      onRest: (_a, _b, item) => {
        if (index === item) {
          set(state => (state + 1) % slides.length)
        }
      },
      exitBeforeEnter: true,
    })
    return (
      <div className="flex fill center">
        <div className="Clocker">
        <Clocker />
        
        {<Link href="http://localhost:3000/SecondPage">Second Page</Link>}

        { <Link href='/second'>
        {transitions((style, i) => (
          <animated.div
          className='bg'
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
          />
          ))}
        </Link> }

        {/* <SecondPage /> */}
        </div>
      </div>
    )
  }
