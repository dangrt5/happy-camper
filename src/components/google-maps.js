import React from "react";
import resultImg from "../assets/images/resultimg.png";
import "../assets/css/google-map.css";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfoCard: false,
      markerContent: {}
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
    scrollwheel: false,
    mapTypeId: "terrain",
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });

  let marker = new google.maps.Marker({position: latLng, map: map});

  marker.addListener("click", () => {
    this.setState({
      showInfoCard: true
    })
  })

  map.addListener("click", () => {
    this.setState({
      markerContent: {},
      showInfoCard: false
    })
  })

}


  render() {
    const { markerContent, showInfoCard } = this.state;

    return (
      <div>
        <div id="map"></div>
        { showInfoCard
          ? <div className="google-modal">
              <img src={resultImg}/>
              <div className="info">
                <h1 className="parkName">Park Name</h1>
                <h3>123 Park Street</h3>
                <h3>Big Bear Lake, CA</h3>
                <h3>Phone #</h3>
                <h3>URL: facebook.com</h3>
              </div>
            </div>
          : <div></div>
        }
      </div>

    )
  }
}

export default GoogleMap;
