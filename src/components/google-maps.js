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
    mapTypeId: "terrain",
    mapTypeControl: false,
    fullscreenControl: false
  });

  let marker = new google.maps.Marker({position: latLng, map: map});

  let infoWindow = new google.maps.InfoWindow({
    content:
    `<div className="infoWindow">
      <img src={resultImg}/>
      <div className="info">
        <h1 className="parkName">Peter's So Gay</h1>
        <h3>123 Park Street</h3>
        <h3>San Diego, CA</h3>
        <h3>Phone #</h3>
        <h3>URL: facebook.com</h3>
      </div>
    </div>`
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker)
  })

}


  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default GoogleMap;
