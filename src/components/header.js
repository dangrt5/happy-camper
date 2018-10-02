import React, {Component} from "react";
import menuBtn from "../assets/images/happy-camper-logo2-white.png";
import mapBtn from "../assets/images/icons/header/folded-paper-of-a-map.png";
import "../assets/css/resultsPage.css";

class Header extends Component {
  constructor(props) {
    super(props);

    console.log("header props", props);

    this.state = {
      searchInput: "",
      path: props.path
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleInputChange = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  aboutUs = {
    fontSize: "2em",
    fontWeight: "200",
    marginLeft: "5%"
  }

  render() {
    const {searchInput, path} = this.state;
    switch(path) {
      case "/search":
        return (
          <div className="header">
            <img className="menu-btn" src={menuBtn}/>
            <form onSubmit={this.handleFormSubmit}>
              <input onChange={this.handleInputChange} type="text" placeholder="City and State, or Zipcode" value={searchInput}/>
            </form>
            <img className="header-toggle" src={mapBtn}/>
          </div>
        );
      case "/about-us":
        return (
          <div className="header">
            <img className="menu-btn" src={menuBtn}/>
            <h1 style={this.aboutUs}>Meet the Team</h1>
          </div>
        );
      case "/itinerary":
        return (
          <div className="header">
            <img className="menu-btn" src={menuBtn}/>
            <h1 style={this.aboutUs}>Itinerary</h1>
          </div>
        );
      default: {
        return (
          <div className="header">
            <img className="menu-btn" src={menuBtn}/>
          </div>
        )
      }
    }
  }
}

export default Header;
