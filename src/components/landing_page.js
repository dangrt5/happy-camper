import React, {Component} from 'react';
import '../assets/css/landingPage.css';
import logo from "../assets/images/happy-camper-logo1.png";

export default class LandingPage extends Component {
    render(){
        return (
            <div class="landing-page-container">
                <img class="logo" src={logo}/>
                <form>
                    <input type="text" class="submit-input" name="location"/><br/>
                    <button class="submit-button">Submit</button>
                </form>
            </div>
        )
    }
}
