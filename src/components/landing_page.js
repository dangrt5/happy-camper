import React, {Component} from 'react';
import '../assets/css/landingPage.css';
import logo from "../assets/images/happy-camper-logo1.png";

export default class LandingPage extends Component {
    render(){
        return (
            <div className="landing-page-container">
                <img className="logo" src={logo}/>
                <form>
                    <input type="text" className="submit-input" name="location"/><br/>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        )
    }
}
