import React, { Component } from 'react'
import  Card from './CardUI';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


import img1 from '../assets/botanical.jpg';
import img2 from '../assets/charles.jpg';
import img3 from '../assets/marcus.jpg';
import img4 from '../assets/fuck.jpg';
import img5 from '../assets/county.jpg';
import img6 from '../assets/zoo.jpg';
import img7 from '../assets/milwaukee.jpg';
import img8 from '../assets/mitchell.jpg';
import img9 from '../assets/war.jpg';

//test

class Cards extends Component {
    render(){
        return (
            <div className="help">
            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">

                    <div className="col-md-4">
                        <Card imgsrc={img1} title='Boerner Botanical Gardens' paragraph='Thousands of plants bring the seasons to life at Boerner, with colorful and fragrant displays laid out in 12 formal gardens. Explore a rose garden, peony garden, and daylilly garden, stroll under blossoming crabapples and enjoy brunch with a view in the cafe.'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title='Charles Allis Art Museum' paragraph='Charles Allis began accumulating his vast collection while still a young man, interested in many cultures from around the world. Working with various art dealers, he educated himself reading books about art, and he researched each purchase diligently.'/>
                        </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title='Marcus Center for the Performing Arts' paragraph='The Marcus Center for the Performing Arts is home to eight arts groups: the Milwaukee Symphony and Youth Symphony orchestras; Milwaukee Ballet; Florentine Opéra Company; Black Arts Milwaukee; First Stage Theater; Optimist Theatre; and Suemo Dance Company. It also features travelling shows through its Broadway in Milwaukee series.'/>
                </div>
                <div className="col-md-4">
                        <Card imgsrc={img4} title='Milwaukee Art Museum' paragraph='Our collection contains nearly 25,000 works of art. It is one of the largest museums in the United States.'/>
                        </div>
                        <div className="col-md-4">
                        <Card imgsrc={img5} title='Milwaukee County Historical Society' paragraph='The Milwaukee County Historical Societys mission: to preserve and present Milwaukee County history.'/>
                        </div>
                        <div className="col-md-4">
                        <Card imgsrc={img6} title='Milwaukee County Zoo' paragraph='Our collection contains nearly 25,000 works of art. It is one of the largest museums in the United States.'/>
                        </div>
                        <div className="col-md-4">
                        <Card imgsrc={img7} title='Milwaukee Public Museum' paragraph='Take a journey through the history of the Milwaukee Public Museum! Our outreach program brings the Museum to the community!'/>
                        </div>
                        <div className="col-md-4">
                        <Card imgsrc={img8} title='Mitchell Park Domes' paragraph='Experience a desert oasis, a tropical jungle and floral gardens. All in one afternoon! The Mitchell Park Horticultural Conservatory, better known as The Domes, is one of the most unique destinations in Milwaukee.'/>
                        </div>
                        <div className="col-md-4">
                        <Card imgsrc={img9} title='War Memorial Center' paragraph='The Milwaukee County War Memorial Center is a living memorial to “Honor the Dead by Serving the Living.” Its educational experiences bring to life this memorial and tell the stories of the veterans who served and sacrificed for our freedom. Over 50,000 veterans and 140,000 visitors rely on the Center each year.'/>
                        </div>
                      
                </div>
            </div>
            </div>
        );
    }
}

export default Cards;