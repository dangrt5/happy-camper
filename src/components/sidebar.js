import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../assets/css/cheeseburger.css";

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="pages">
          <Link to="/"><h1>home</h1></Link>
          <Link to="/itinerary"><h1>itinerary</h1></Link>
          <h1>survival guide</h1>
          <Link to="/about-us"><h1>about us</h1></Link>
        </div>
      </div>
    )
  }
}

export default HamburgerMenu;
