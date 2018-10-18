import React, {Component} from 'react';
import LocationSearchInput from './input_search'
import '../assets/css/landingPage.css';
import logo from "../assets/images/happy-camper-logo1-white.png";

export default class LandingPage extends Component {
    render(){
        return (
            <div>
                <div className="landing-page-background1"></div>
                <div className="landing-page-background2"></div>
                <div className="landing-page-background3"></div>
                <div className="landing-page-container">
                    <img className="logo" src={logo}/>
                    <form>
                        <LocationSearchInput class="landing-page-input" push={this.props.history.push}/>
                    </form>
                </div>
            </div>
        )
    }
}
