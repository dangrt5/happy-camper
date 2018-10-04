import React from "react";
import "../assets/css/google-map.css";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    console.log("Google Map Props", props);
    this.state = {
      params: props.params
    }
  }
  componentDidMount() {
    this.initGoogleMap();
  }

initGoogleMap = () => {
  const {params} = this.state;
  let latLng = new google.maps.LatLng(params.lat, params.lng);
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: 10,
    mapTypeId: "terrain"
  });
  let marker = new google.maps.Marker({position: latLng, map: map});
}


  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default GoogleMap;
