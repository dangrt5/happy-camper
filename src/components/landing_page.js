import React, {Component} from 'react';
import LocationSearchInput from './input_search'
import '../assets/css/landingPage.css';
import logo from "../assets/images/happy-camper-logo1-white.png";

import background2 from "../assets/images/backgrounds/wallpaper.jpg"

export default class LandingPage extends Component {
    componentDidMount(){
        document.body.style.backgroundImage = `url(${background2})`;
    }
    componentWillUnmount(){
        document.body.style.backgroundImage = '';
    }
    render(){
        return (
            <div className="landing-page-container">
                <img className="logo" src={logo}/>
                <form>
                    <LocationSearchInput class="landing-page-input" push={this.props.history.push}/>
                </form>
            </div>
        )
    }
}
