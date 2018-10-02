import React, {Component} from 'react';
import Header from "./header";

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
            <div className="container">
                <Header path={path}/>
                <div className="camp-title">
                    <h1>Jackson Flats</h1>
                    <h3>California</h3>
                </div>
                <div className="shortcuts">
                    <div className="website">
                        <img src="../assets/images/icons/shortcuts/internet.png"/>
                        <p>website</p>
                    </div>
                    <div className="call">
                        <img src="../assets/images/icons/shortcuts/phone.png"/>
                        <p>call</p>
                    </div>
                    <div className="save">
                        <img src="../assets/images/icons/shortcuts/save.png"/>
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
                                    <img src="../assets/images/icons/accessibility/008-calendar.png"/> <span>Reservable</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/002-wheelchair.png"/><span>ADA Access</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/015-tables.png"/> <span>Picnic Tables</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/010-liquid.png"/><span>Drinking Water</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/012-plug.png"/> <span>Electric Hookups</span>
                                </div>
                                <div className="amenity-item">
                                        <img src="../assets/images/icons/accessibility/004-water-1.png"/><span>Water Hookups</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/005-fire.png"/><span>Fires Allowed</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/013-log.png"/> <span>Firewood</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/006-shop.png"/><span>Market</span>
                                </div>
                            </div>
                            <div className="amenity-column">
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/007-load.png"/> <span>Phone Service</span>
                                </div>
                                <div className="amenity-item">
                                        <img src="../assets/images/icons/accessibility/003-wifi-signal.png"/><span>Wifi</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/014-pets.png"/><span>Pets Allowed</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/011-alcohol.png"/> <span>Alcohol Allowed</span>
                                </div>
                                <div className="amenity-item">
                                        <img src="../assets/images/icons/accessibility/001-water.png"/><span>Showers</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/wc.png"/> <span>Toilets</span>
                                </div>
                                <div className="amenity-item">
                                    <img src="../assets/images/icons/accessibility/016-trash.png"/><span>Trash</span>
                                </div>
                                <div className="amenity-item">
                                        <img src="../assets/images/icons/accessibility/018-plumbing.png"/><span>Sanitary Dump</span>
                                </div>
                                <div className="amenity-item">
                                        <img src="../assets/images/icons/accessibility/009-sewer.png"/> <span>Sewer Hookups</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
