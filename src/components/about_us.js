import React, {Component} from 'react';
import '../assets/css/about-us.css';
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import portfolio from "../assets/images/portfolio.png";
import Header from "./header";
import randy from "../assets/images/randy.png";
import rachel from "../assets/images/rachel.jpeg";
import david from "../assets/images/david.jpeg";

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
                          <img src={github} alt=""/>
                          <img src={linkedin} alt=""/>
                          <img src={portfolio} alt=""/>
                        </div>
                    </div>
                    <div className="dev">
                        <img className="memberPhoto" src={rachel} alt=""/>
                        <h3>Rachel Pan</h3>
                        <div>
                          <img src={github} alt=""/>
                          <img src={linkedin} alt=""/>
                          <img src={portfolio} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <h2>Back End Developers</h2>
                    <div className="dev">
                        <img className="memberPhoto" src={david} alt=""/>
                        <h3>David Ahn</h3>
                        <div>
                          <img src={github} alt=""/>
                          <img src={linkedin} alt=""/>
                          <img src={portfolio} alt=""/>
                        </div>
                    </div>
                    <div className="dev">
                        <img className="memberPhoto" src="" alt=""/>
                        <h3>Hank Kim</h3>
                        <div>
                          <img src={github} alt=""/>
                          <img src={linkedin} alt=""/>
                          <img src={portfolio} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}