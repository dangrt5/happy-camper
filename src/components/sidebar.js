import React, {Component} from "react";
import "../assets/css/cheeseburger.css";

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="pages">
          <h1>home</h1>
          <h1>itinerary</h1>
          <h1>survival guide</h1>
          <h1>about us</h1>
        </div>
      </div>
    )
  }
}

export default HamburgerMenu;
