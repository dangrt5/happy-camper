import React from "react";
import "../assets/css/google-map.css";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      markerDetails: null
    }
  }

  componentDidMount() {
    this.initGoogleMap();
  }

openGoogleMapMarker = (e) => {
  googleMapModal.style
}

initGoogleMap = () => {
  const {params} = this.props;
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
        <h1 className="parkName">Parky Park</h1>
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
    const { showModal } = this.state;

    return (
      <div>
        <div id="map"></div>
        { showModal ? <div className="google-modal">Hi</div> : <div></div>  }
      </div>

    )
  }
}

export default GoogleMap;
