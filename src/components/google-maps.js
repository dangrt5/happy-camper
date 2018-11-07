import React from "react";
import resultImg from "../assets/images/resultimg.png";
import {Link} from "react-router-dom";
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
    const resultsPath = this.props.history.location.pathname
    this.props.history.push({
      pathname: `/camp/${id}/overview`,
      state: { resultsPath: resultsPath}
    });
  }


  render() {
    const { markerContent: {park_name, id, addr, phone, park_website, img_url, lat, lng}, showInfoCard} = this.state;
    return (
      <div>
        <div id="map"></div>

        { showInfoCard
          ? <div className="google-modal">
              <div className="camp-thumbnail">
                <img onClick={this.sendToCampSite} src={img_url || resultImg}/>
              </div>
              <div className="info">
                <Link className="parkName" to={`/camp/${id}/overview`}>{park_name}</Link>
                <h3>{addr || `lat: (${lat}), lng: (${lng})`}</h3>
                <h3>{phone ? <a target="_blank" href={`tel:${phone}`}>{phone}</a> : "No Phone # Available"}</h3>
                <a target="_blank" href={park_website}>Website</a>
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
