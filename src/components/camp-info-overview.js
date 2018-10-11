import React from 'react';

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

export default class Overview extends React.Component {
    render(){
        return (
            <div className="overview">
                    <h3>Description</h3>
                    <p>Description</p>
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
        )
    }
}
