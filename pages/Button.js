import React from 'react'
import  styles from '../src/css/buttons.module.css'
import '../src/css/DirectoryPage.module.css';
import '../src/css/PublicPage.module.css';
import '../src/css/ArtsPage.module.css';
import '../src/css/ChildrenPage.module.css';
import '../src/css/HealthPage.module.css';
import '../src/css/HousingPage.module.css';
import '../src/css/ParksPage.module.css';
import '../src/css/JobPage.module.css';

import Link from "next/link"; 

const Buttonoffices = () =>{
  return (
    <div className={styles.Offices}>
      <Link href ='http://localhost:3000/judgesPage'>
        <button2>
            Offices
        </button2>
      </Link>
    </div>
  )
}
const Buttonpeople = () =>{
  return (
    <div className={styles.People}>
      <Link href ='http://localhost:3000/PeoplePage'>
        <button3>
            People
        </button3>
      </Link>
    </div>
  )
}

const Buttonjobs = () =>{
  return (
    <div className={styles.Jobs}>
      <Link href ='http://localhost:3000/JobPage'>
        <button4>
            Jobs
        </button4>
      </Link>
    </div>
  )
}
const Buttondir = () =>{
  return (
    <div className={styles.Directory}>
      <Link href ='http://localhost:3000/DirectoryPage'>
        
        <button5>
            Directories
        </button5>
      </Link>
    </div>
  )
}
  const Buttonabout = () =>{
    return (
      <div className='AboutMKE'>
          <button6>
              AboutMKE
          </button6>
      </div>
    )
  }


const Buttonne = () =>{
  return (
    <div className='NewsEvents'>
        <button7>
            News/Events
        </button7>
    </div>
  )
}   
 const Buttontransportation = () =>{
      return (
        <div className='Transportation'>
            <button8>
                Transportation
            </button8>
        </div>
      )
}
const Buttonreturndir = () =>{
  return (
    <div className='Returndir'>
        <button9>
            Return to Menu
        </button9>
    </div>
  )
}
const Buttonpublicsaftey = () =>{
  return (
    <div className='Publicsafety'>
        <button10>
            Public
            Safety and
            Justice
        </button10>
    </div>
  )
}
const Buttonparks = () =>{
  return (
    <div className='Parks'>
        <button11>
            Parks and
            Recreation
        </button11>
    </div>
  )
}
const Buttonhealth = () =>{
  return (
    <div className='Health'>
        <button12>
            Health and Services
        </button12>
    </div>
  )
}
const Buttonarts = () =>{
  return (
    <div className='Arts'>
        <button13>
            Arts and Culture
        </button13>
    </div>
  )
}
const Buttonchildren = () =>{
  return (
    <div className='Children'>
        <button14>
            Children and
            Family
        </button14>
    </div>
  )
}
const Buttonhousing = () =>{
  return (
    <div className='Housing'>
        <button15>
           Transportation 
           and 
           Housing
        </button15>
    </div>
  )
}
const Buttonpublicback = () =>{
  return (
    <div className='Publicback'>
        <button16>
           Go Back
        </button16>
    </div>
  )
}
const Buttonparkback = () =>{
  return (
    <div className='Parkback'>
        <button17>
           Go Back
        </button17>
    </div>
  )
}
const Buttonartsback = () =>{
  return (
    <div className='Artsback'>
        <button18>
           Go Back
        </button18>
    </div>
  )
}
const Buttonchildrenback = () =>{
  return (
    <div className='Childrenback'>
        <button19>
           Go Back
        </button19>
    </div>
  )
}
const Buttonhealthback = () =>{
  return (
    <div className='Healthback'>
        <button20>
           Go Back
        </button20>
    </div>
  )
}
const Buttonhousingback = () =>{
  return (
    <div className='Housingback'>
        <button21>
           Go Back
        </button21>
    </div>
  )
}
const Buttontransportback = () =>{
  return (
    <div className='Transportback'>
        <button22>
           Go Back
        </button22>
    </div>
  )
}
const Buttondirmenu= () =>{
  return (
    <div className='Dirmenu'>
        <button23>
           Go Back
        </button23>
    </div>
  )
}
const Buttondirreturnmenu= () =>{
  return (
    <div className='Dirreturnmenu'>
        <button24>
           Return to Menu
        </button24>
    </div>
  )
}
  const Buttonjobhome= () =>{
    return (
      <div className='Jobhome'>
          <button25>
             Back
          </button25>
      </div>
    )
  }
  export{
    
  Buttonoffices,
  Buttonpeople,
    Buttonjobs,
    Buttondir,
    Buttonabout,
    Buttonne,
    //--These go in the Directory Page
    Buttontransportation,  
    Buttonpublicsaftey,
    Buttonparks,
    Buttonarts,
    Buttonhealth,
    Buttonchildren,
    Buttonhousing,
    //^^^^^^
    Buttonreturndir,
    //--These buttons bring you back to the Directory Page
    Buttonpublicback,
    Buttonparkback,
    Buttonartsback,
    Buttonchildrenback,
    Buttonhealthback,
    Buttonhousingback,
    Buttontransportback,
    //--^^^^^
    //These are independent Main menu buttons
    Buttondirmenu,
    Buttondirreturnmenu,
    //^^^^^
    //--Home button for job
    Buttonjobhome
    //^^^^^
}