import './botanical.css';
import logo from './Cads/images/gardenzzz.png'
import table from './Cads/images/table.jpg'

import {Link} from 'react-router-dom'

function BotanicalPage() {
  return (
    
    <div className = "holy">
       
    <div className = "App">
      <h1>Botanical Gardens</h1>
      
      </div>
      <div className = "happy">
      <h1>Boerner Botanical Gardens</h1>
      </div>
        <div className = "para">
          <p>Thousands of plants bring the seasons to life at the Botanical Gardens, with colorful and fragrant displays laid out in 12 formal gardens. Explore a rose garden, peony garden and daylily garden; stroll under blossoming crabapples; and enjoy the view while having a light lunch in the cafe or a special holiday brunch in the Garden Room. Boerner Botanical Gardens is located just 15 minutes outside of Milwaukee in the Village of Hales Corners. Visit throughout the year to see the different gardens in bloom.</p>
        </div>

        <div className = "pictureone">
        <img src={logo}/>
        </div>
        <div className = "bio">
          <h3>Garden Guide</h3>
        </div>
        <div className = "tables">
        <img src={table} />
        </div>
        <div className = "hour">
          <h3>Hours</h3>
        </div>
        <div className = "boerners">
          <h4>Botanical Gardens Hours</h4>
        </div>
        <div className = "dusty">
          <p>Open 8 a.m.–dusk, 7 days a week
Admission collected May 1 – October</p>
        </div>
        <div className= "poof">
          <h3>Education and Visitor Center Hours </h3>
        </div>
        <div className= "error">
          <p>9 a.m. – 4 p.m., 7 days a week</p>
        </div>
        <div className= "mary">
          <h3>Garden House Hours</h3>
        </div>
        <div className= "shoot">
          <p>Open 8 a.m.–7 p.m., 7 days a week</p>
        </div>
        <div className= "addy">
          <h3>Admission Fees</h3>
        </div>
        <div className= "add">
          <p>Collected During the Regular Garden Season</p>
        </div>
      </div>
  );
}

export default BotanicalPage;