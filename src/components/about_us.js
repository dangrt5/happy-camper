import React, {Component} from 'react';
import '../assets/css/about-us.css';
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import portfolio from "../assets/images/portfolio.png";

export default class AboutUs extends Component {
    render(){
        return (
            <div className="container">
                <div className="team">
                    <h2>Front End Developers</h2>
                    <div className="dev">
                        <img src="" alt=""/>
                        <h3>Randy Dang</h3>
                        <img src={github} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={portfolio} alt=""/>
                    </div>
                    <div className="dev">
                        <img src="" alt=""/>
                        <h3>Rachel Pan</h3>
                        <img src={github} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={portfolio} alt=""/>
                    </div>
                </div>
                <div className="team">
                    <h2>Back End Developers</h2>
                    <div className="dev">
                        <img src="" alt=""/>
                        <h3>David Ahn</h3>
                        <img src={github} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={portfolio} alt=""/>
                    </div>
                    <div className="dev">
                        <img src="" alt=""/>
                        <h3>Hank Kim</h3>
                        <img src={github} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={portfolio} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
