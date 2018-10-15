import React from "react";
import resultImg from "../assets/images/resultimg.png";
import {getResultsData} from "../actions";
import {connect} from "react-redux";
import "../assets/css/google-map.css";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfoCard: false,
      markerContent: {},
    }
  }

componentDidMount() {
  this.initGoogleMap();
}

componentDidUpdate(prevProps) {
  if(this.props !== prevProps) {
    this.initGoogleMap();
  }
}

initGoogleMap = () => {
  const {list, params} = this.props;


  let latLng = new google.maps.LatLng(params.lat, params.lng);

  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: 8,
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

  for(let i = 0 ; i < list.length; i++) {
    let latLng = new google.maps.LatLng(list[i].lat, list[i].lng);
    let marker = new google.maps.Marker({position: latLng, map: map, location: list[i]});

    marker.addListener("click", () => {
      if(this.props.hideCard) {
        return;
      }
     this.setState({
       showInfoCard: true,
       markerContent: marker.location
     });
   });

  };

  map.addListener("click", () => {
    this.setState({
      markerContent: {},
      showInfoCard: false
    });
  });
}

  sendToCampSite = (e) => {
    const {markerContent: {id}} = this.state
    this.props.history.push(`/camp/${id}/overview`);
  }


  render() {
    const { markerContent: {park_name, addr, phone, park_website, img_url, lat, lng}, showInfoCard} = this.state;
    return (
      <div>
        <div id="map"></div>

        { showInfoCard
          ? <div className="google-modal">
              <img onClick={this.sendToCampSite} src={resultImg}/>
              <div className="info">
                <h1 onClick={this.sendToCampSite} className="parkName">{park_name}</h1>
                <h3>{addr || `lat: (${lat}), lng: (${lng})`}</h3>
                <h3>{phone ? <a href={`tel:${phone}`}>{phone}</a> : "No Phone # Available"}</h3>
                <a href={park_website}>Website</a>
              </div>
            </div>
          : <div></div>
        }
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
      list: state.list.results
  }
}

export default GoogleMap;
