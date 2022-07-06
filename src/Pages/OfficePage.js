import React, {useState} from 'react'
// import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, Buttonreturndir, Buttontransportation,Buttondirback, Buttonparkback, Buttondirmenu,Buttondirreturnmenu} from '../Button.js'
import data from "../Results.json";
import './OfficePage.css'




// function OfficePage() {
//   return (
//     <div className = 'background'>

//         Office Page
//         <Link to='/'>
//     <Buttondirreturnmenu />
//     </Link>   
    
//     </div>
//   )
// }

// export default OfficePage

function Table() {

const [contacts, setContacts] = useState(data);

  return (
    <div className="app container">
      <table>
        <thead>
          <tr>
            <th>Judge</th>
            <th>Branch</th>
            <th>Deputy Clerk</th>
            <th>Room</th>
            <th>Office Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
          <tr>
              <td>{contact.Judge}</td>
              <td>{contact.Branch}</td>
              <td>{contact.Deputy_Clerk}</td>
              <td>{contact.Room}</td>
              <td>{contact.Office_Phone}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
