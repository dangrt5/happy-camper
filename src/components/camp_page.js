import React, {Component} from 'react';
import Header from './header';
import '../assets/css/campPage.css';

import menuBtn from "../assets/images/happy-camper-logo2-white.png";
import mapBtn from "../assets/images/icons/header/folded-paper-of-a-map.png";

import website from "../assets/images/icons/shortcuts/internet.png";
import phone from "../assets/images/icons/shortcuts/phone.png";
import save from "../assets/images/icons/shortcuts/save.png";

import reservable from "../assets/images/icons/accessibility/008-calendar.png";
import wheelchair from "../assets/images/icons/accessibility/002-wheelchair.png";
import picnicTables from "../assets/images/icons/accessibility/015-tables.png";
import drinkingWater from "../assets/images/icons/accessibility/010-liquid.png";
import electricHookups from "../assets/images/icons/accessibility/012-plug.png";
import waterHookups from "../assets/images/icons/accessibility/004-water-1.png";
import firesAllowed from "../assets/images/icons/accessibility/005-fire.png";
import firewood from "../assets/images/icons/accessibility/013-log.png";
import market from "../assets/images/icons/accessibility/006-shop.png";
import phoneService from "../assets/images/icons/accessibility/007-load.png";
import wifi from "../assets/images/icons/accessibility/003-wifi-signal.png";
import petsAllowed from "../assets/images/icons/accessibility/014-pets.png";
import alcoholAllowed from "../assets/images/icons/accessibility/011-alcohol.png";
import showers from "../assets/images/icons/accessibility/001-water.png";
import toilets from "../assets/images/icons/accessibility/wc.png";
import trash from "../assets/images/icons/accessibility/016-trash.png";
import sanitaryDump from "../assets/images/icons/accessibility/018-plumbing.png";
import sewerHookup from "../assets/images/icons/accessibility/009-sewer.png";

export default class CampPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.match.path
    }
  }
    render(){
      const {path} = this.state;
        return (
            <div>
              <Header path={path}/>
                <div className="container">

                    <div className="camp-title">
                        <h1>Jackson Flats</h1>
                        <h3>California</h3>
                    </div>
                    <div className="shortcuts">
                        <div className="website">
                            <img src={website}/>
                            <p>website</p>
                        </div>
                        <div className="call">
                            <img src={phone}/>
                            <p>call</p>
                        </div>
                        <div className="save">
                            <img src={save}/>
                            <p>save</p>
                        </div>
                    </div>

                    <div className="slider-container">
                        <div className="photos-container">
                            <div className="photo-slide photo-1"><img src="../assets/images/tempfiles/park1.jpeg"/></div>
                            <div className="photo-slide photo-2"><img src="../assets/images/tempfiles/park2.jpeg"/></div>
                            <div className="photo-slide photo-3"><img src="../assets/images/tempfiles/park3.jpg"/></div>
                            <div className="photo-slide photo-4"><img src="../assets/images/tempfiles/park4.jpg"/></div>
                            <div className="photo-slide photo-5"><img src="../assets/images/tempfiles/park5.jpg"/></div>
                        </div>
                    </div>

                    <div className="info-container">
                        <div className="info-menu">
                            <ul>
                                <li><a href="./campPage-overview.html">Overview</a></li>
                                <li><a href="./campPage-location.html">Location</a></li>
                                <li><a href="./campPage-weather.html">Weather</a></li>
                            </ul>
                        </div>

                        <div className="overview">
                            <h3>Description</h3>
                            <p>Primitive camping is available (seven sites; $15 per night per site; reservations required). Picnic table, food storage box, and pit toilet are provided. No water is available. Distance from landing to campground is one-half mile and includes a 157-stair climb. \n\nWARNING: Western gulls nest on Anacapa Island From April through mid-August. During this time, visitors will encounter seabird rookery conditions: guano, strong odor, constant noise, bird carcasses, and birds protecting their territory.</p>
                            <h3>Amenities</h3>
                            <div className="amenity-container">
                                <div className="amenity-column">
                                    <div className="amenity-item">
                                        <img src={reservable}/> <span>Reservable</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={wheelchair}/><span>ADA Access</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={picnicTables}/> <span>Picnic Tables</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={drinkingWater}/><span>Drinking Water</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={electricHookups}/> <span>Electric Hookups</span>
                                    </div>
                                    <div className="amenity-item">
                                            <img src={waterHookups}/><span>Water Hookups</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={firesAllowed}/><span>Fires Allowed</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={firewood}/> <span>Firewood</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={market}/><span>Market</span>
                                    </div>
                                </div>
                                <div className="amenity-column">
                                    <div className="amenity-item">
                                        <img src={phoneService}/> <span>Phone Service</span>
                                    </div>
                                    <div className="amenity-item">
                                            <img src={wifi}/><span>Wifi</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={petsAllowed}/><span>Pets Allowed</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={alcoholAllowed}/> <span>Alcohol Allowed</span>
                                    </div>
                                    <div className="amenity-item">
                                            <img src={showers}/><span>Showers</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={toilets}/> <span>Toilets</span>
                                    </div>
                                    <div className="amenity-item">
                                        <img src={trash}/><span>Trash</span>
                                    </div>
                                    <div className="amenity-item">
                                            <img src={sanitaryDump}/><span>Sanitary Dump</span>
                                    </div>
                                    <div className="amenity-item">
                                            <img src={sewerHookup}/> <span>Sewer Hookups</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
