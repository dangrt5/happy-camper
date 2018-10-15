import React from 'react';

import reservableIcon from "../assets/images/icons/accessibility/008-calendar.png";
import wheelchairIcon from "../assets/images/icons/accessibility/002-wheelchair.png";
import picnicTablesIcon from "../assets/images/icons/accessibility/015-tables.png";
import drinkingWaterIcon from "../assets/images/icons/accessibility/010-liquid.png";
import electricHookupsIcon from "../assets/images/icons/accessibility/012-plug.png";
import waterHookupsIcon from "../assets/images/icons/accessibility/004-water-1.png";
import firesAllowedIcon from "../assets/images/icons/accessibility/005-fire.png";
import firewoodIcon from "../assets/images/icons/accessibility/013-log.png";
import marketIcon from "../assets/images/icons/accessibility/006-shop.png";
import phoneServiceIcon from "../assets/images/icons/accessibility/007-load.png";
import wifiIcon from "../assets/images/icons/accessibility/003-wifi-signal.png";
import petsAllowedIcon from "../assets/images/icons/accessibility/014-pets.png";
import alcoholAllowedIcon from "../assets/images/icons/accessibility/011-alcohol.png";
import showersIcon from "../assets/images/icons/accessibility/001-water.png";
import toiletsIcon from "../assets/images/icons/accessibility/wc.png";
import trashIcon from "../assets/images/icons/accessibility/016-trash.png";
import sanitaryDumpIcon from "../assets/images/icons/accessibility/018-plumbing.png";
import sewerHookupIcon from "../assets/images/icons/accessibility/009-sewer.png";
import notAvaliableIcon from '../assets/images/icons/accessibility/prohibition-signal.png'

export default class Overview extends React.Component {

 

    render(){
        // debugger;
        console.log('Overview Props ', this.props)
        let {direction_info, park_desc, park_website, phone} = this.props.item.parkinfo[0];

        let {amenites} = this.props.item
        if(typeof amenites["reservable"] === 'string'){
            for(let key in amenites){
                amenites[key] = JSON.parse(amenites[key].toLowerCase())
            }
        }
        if(park_desc === ''){
            park_desc = 'No description avaliable.'
        }
        if(park_website === ''){
            park_website = 'No website avaliable.'
        }
        if(phone === ''){
            phone = 'No phone number avaliable.'
        }

        return (
            <div className="overview">
                <h3>Website</h3>
                    <a href={park_website}>{park_website}</a>
                <h3>Phone</h3>
                    <p>{phone}</p>
                <h3>Description</h3>
                    <p>{park_desc}</p>
                <h3>Amenities</h3>
                <div className="amenity-container">
                    <div className="amenity-column">
                        <div className="amenity-item">
                            <img src={amenites["reservable"] ? reservableIcon : notAvaliableIcon}/> <span>Reservable</span>
                        </div>
                        {/* <div className="amenity-item">
                            <img src={wheelchairIcon}/><span>ADA Access</span>
                        </div> */}
                        <div className="amenity-item">
                            <img src={amenites["picnic-table"] ? picnicTablesIcon : notAvaliableIcon}/> <span>Picnic Tables</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["drinking-water"] ? drinkingWaterIcon : notAvaliableIcon}/><span>Drinking Water</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["electric-hookups"] ? electricHookupsIcon : notAvaliableIcon}/> <span>Electric Hookups</span>
                        </div>
                        <div className="amenity-item">
                                <img src={amenites["water-hookups"] ? waterHookupsIcon : notAvaliableIcon}/><span>Water Hookups</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["fires-allowed"] ? firesAllowedIcon : notAvaliableIcon}/><span>Fires Allowed</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["firewood"] ? firewoodIcon : notAvaliableIcon}/> <span>Firewood</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["market"] ? marketIcon : notAvaliableIcon}/><span>Market</span>
                        </div>
                    </div>
                    <div className="amenity-column">
                        <div className="amenity-item">
                            <img src={amenites["mobile-service"] ? phoneServiceIcon : notAvaliableIcon}/> <span>Phone Service</span>
                        </div>
                        <div className="amenity-item">
                                <img src={amenites["wifi"] ? wifiIcon : notAvaliableIcon}/><span>Wifi</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["pets-allowed"] ? petsAllowedIcon : notAvaliableIcon}/><span>Pets Allowed</span>
                        </div>
                        {/* <div className="amenity-item">
                            <img src={alcoholAllowedIcon}/> <span>Alcohol Allowed</span>
                        </div> */}
                        <div className="amenity-item">
                                <img src={amenites["showers"] ? showersIcon : notAvaliableIcon}/><span>Showers</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["toilets"] ? toiletsIcon : notAvaliableIcon}/> <span>Toilets</span>
                        </div>
                        <div className="amenity-item">
                            <img src={amenites["trash"] ? trashIcon : notAvaliableIcon}/><span>Trash</span>
                        </div>
                        <div className="amenity-item">
                                <img src={amenites["sanitary-dump"] ? sanitaryDumpIcon : notAvaliableIcon}/><span>Sanitary Dump</span>
                        </div>
                        <div className="amenity-item">
                                <img src={amenites["sewer-hookups"] ? sewerHookupIcon : notAvaliableIcon}/> <span>Sewer Hookups</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
