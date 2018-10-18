import React, {Component} from 'react';
import '../assets/css/about-us.css';
import github from "../assets/images/about_us/github.png";
import linkedin from "../assets/images/about_us/linkedin.png";
import portfolio from "../assets/images/about_us/portfolio.png";
import Header from "./header";
import randy from "../assets/images/about_us/randy.jpg";
import rachel from "../assets/images/about_us/rachel.jpg";
import david from "../assets/images/about_us/david.jpg";
import hank from "../assets/images/about_us/hank.jpg";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.match.path
    }
  }
    render(){
      const {path} = this.state;
        return (
          <div>
            <Header path={path}/>
            <div className="container">
                <div className="team">
                    <h2>Front End Developers</h2>
                    <div className="dev">
                        <img className="memberPhoto" src={randy} alt=""/>
                        <h3>Randy Dang</h3>
                        <div>
                          <a href="https://github.com/dangrt5"><img src={github} alt=""/></a>
                          <a href="https://linkedin.com/in/randytuandang"><img src={linkedin} alt=""/></a>
                          <a href="http://dangrandy.com"><img src={portfolio} alt=""/></a>
                        </div>
                    </div>
                    <div className="dev">
                        <img className="memberPhoto" src={rachel} alt=""/>
                        <h3>Rachel Pan</h3>
                        <div>
                          <a href="https://github.com/rpan06"><img src={github} alt=""/></a>
                          <a href="https://linkedin.com/in/rpan/"><img src={linkedin} alt=""/></a>
                          <a href="http://rachelmpan.com"><img src={portfolio} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <h2>Back End Developers</h2>
                    <div className="dev">
                        <img className="memberPhoto" src={david} alt=""/>
                        <h3>David Ahn</h3>
                        <div>
                          <a href="https://github.com/d-ahn10"><img src={github} alt=""/></a>
                          <a href="https://linkedin.com/in/d-ahn10"><img src={linkedin} alt=""/></a>
                          <a href="http://devdavidahn.com"><img src={portfolio} alt=""/></a>
                        </div>
                    </div>
                    <div className="dev">
                        <img className="memberPhoto" src={hank} alt=""/>
                        <h3>Hank Kim</h3>
                        <div>
                          <a href="https://github.com/citation0097"><img src={github} alt=""/></a>
                          <a href="https://www.linkedin.com/in/hank-k-8b0088135/"><img src={linkedin} alt=""/></a>
                          <a href="http://kimhank.com"><img src={portfolio} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
