import React, {Component} from 'react';
import Header from './header';
import CampInfo from './camp-info'
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
    render(){
        return (
            <div className="container">
                <Header/>
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

                <CampInfo />
            </div>
        )
    }
}
