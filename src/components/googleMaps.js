import React from "react";
import "../assets/css/googleMap.css";

class GoogleMap extends React.Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 33.4797555, lng: -119.029083},
      zoom: 5
    });
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default GoogleMap;
