import React, {Component} from 'react';
import LocationSearchInput from './input_search'
import '../assets/css/landingPage.css';
import logo from "../assets/images/happy-camper-logo1.png";

export default class LandingPage extends Component {
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

// this.props.history.push('/');
