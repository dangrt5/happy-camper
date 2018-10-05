import React, {Component} from "react";
import LocationSearchInput from './input_search'

import {Link} from "react-router-dom";
import menuBtn from "../assets/images/happy-camper-logo2-white.png";
import mapBtn from "../assets/images/icons/header/folded-paper-of-a-map.png";
import Sidebar from "react-sidebar"
import HamburgerMenu from "./sidebar";
import listBtn from "../assets/images/icons/header/003-list.png"

import "../assets/css/resultsPage.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      path: props.path,
      sidebarOpen: false,
      params: props.params,
      history: props.history

    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleInputChange = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  navigateBetweenResults = (e) => {
    const {params, history, path} = this.state;
    if(path === "/search/:lat/:lng/list") {
      history.push(`/search/${params.lat}/${params.lng}/map`)
    } else {
        history.push(`/search/${params.lat}/${params.lng}/list`)
    }
  }

  aboutUs = {
    fontSize: "2em",
    fontWeight: "200",
    marginLeft: "5%"
  }

  itinerary = {
    fontSize: "2em",
    fontWeight: "200",
    marginLeft: "15%"
  }

  sidebar = {
    sidebar: { height: "100vh", width: "50vw", "overflowY": "unset", position: "fixed" },
    overlay: {backgroundColor: "rgba(0,0,0,0.85)"}
  }

  render() {
    const {searchInput, path} = this.state;
    switch(path) {
      case "/search/:lat/:lng/list":
        return (
          <div>
            <Sidebar
              sidebar={<HamburgerMenu/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={this.sidebar}
            >
            <div className="header">
              <img onClick={() => this.onSetSidebarOpen(true)} className="menu-btn" src={menuBtn}/>
              <LocationSearchInput class="header-input" push={this.props.history.push}/>
              <img onClick={this.navigateBetweenResults} className="header-toggle" src={mapBtn}/>
            </div>
            </Sidebar>
          </div>
        );
      case "/search/:lat/:lng/map":
        return (
          <div>
            <Sidebar
              sidebar={<HamburgerMenu/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={this.sidebar}
            >
            <div className="header">
              <img onClick={() => this.onSetSidebarOpen(true)} className="menu-btn" src={menuBtn}/>
              <LocationSearchInput class="header-input" push={this.props.history.push}/>
              <img onClick={this.navigateBetweenResults} className="header-toggle" src={listBtn}/>
            </div>
            </Sidebar>
          </div>
        )
      case "/about-us":
        return (
          <div>
            <Sidebar
              sidebar={<HamburgerMenu/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={this.sidebar}
            >
              <div className="header">
                <img onClick={() => this.onSetSidebarOpen(true)} className="menu-btn" src={menuBtn}/>
                <h1 style={this.aboutUs}>Meet the Team</h1>
              </div>
          </Sidebar>
          </div>

        );
      case "/itinerary":
        return (
          <div>
            <Sidebar
              sidebar={<HamburgerMenu/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={this.sidebar}
            >
            <div className="header">
              <img onClick={() => this.onSetSidebarOpen(true)} className="menu-btn" src={menuBtn}/>
              <h1 style={this.itinerary}>Itinerary</h1>
            </div>
          </Sidebar>
          </div>

        );
      default: {
        return (
          <div>
            <Sidebar
              sidebar={<HamburgerMenu/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={this.sidebar}
            >
              <div className="header">
                <img onClick={() => this.onSetSidebarOpen(true)} className="menu-btn" src={menuBtn}/>
              </div>
          </Sidebar>
          </div>

        )
      }
    }
  }
}

export default Header;
