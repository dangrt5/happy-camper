import React from "react";
import resultImg from "../assets/images/resultimg.png"
import {Link} from "react-router-dom";

class CampSiteCard extends React.Component {

  sendToCampPage = (e) => {
    const {id} = this.props.details;
    const resultsPath = this.props.history.location.pathname
    this.props.history.push({
      pathname: `/camp/${id}/overview`,
      state: { resultsPath: resultsPath}
    });
  }

  render() {
    const {park_name, addr, park_website, phone, id, img_url, lat, lng} = this.props.details;
    let formattedPhone = phone.replace(/[^\w\s]/gi, "-").replace(/ [/-] $/, "")

    return (
      <div className="resultList card">
        <div className="camp-thumbnail">
          <img onClick={this.sendToCampPage} src={img_url || resultImg}/>
        </div>
        <div className="info">
          <Link className="parkName" to={`/camp/${id}/overview`}>{park_name}</Link>
          <h3>{addr || `lat: (${lat}), lng: (${lng})`}</h3>
          <h3>{phone ? <a href={`tel:${formattedPhone}`}>{formattedPhone}</a> : "No Phone # Available"}</h3>
          <a target="_blank" href={park_website}>Website</a>
        </div>
      </div>
    )
  }

}

export default CampSiteCard;
