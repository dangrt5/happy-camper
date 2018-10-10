import React from "react";
import resultImg from "../assets/images/resultimg.png"
import {Link} from "react-router-dom";

class CampSiteCard extends React.Component {

  sendToCampPage = (e) => {
    const {id} = this.props.details;
    this.props.history.push(`/camp/${id}/overview`);
  }

  render() {
    const {park_name, addr, park_website, phone, id, img_url} = this.props.details;
    let phoneRegex = /([0-9]{3})([0-9]{3})([0-9]{4})/
    let formattedPhone = phone.replace(/[^\w\s]/gi, "-").replace(/ [/-] $/, "")

    return (
      <div className="card">
        <img onClick={this.sendToCampPage} src={resultImg}/>
        <div className="info">
          <h1 onClick={this.sendToCampPage} className="parkName">{park_name}</h1>
          <h3>{addr || "No Address Available"}</h3>
          <h3>{<a href={`tel:${phone}`}>{formattedPhone}</a> && phone || "No Phone # Available"}</h3>
          <a href={park_website}>Website</a>
        </div>
      </div>
    )
  }

}

export default CampSiteCard;
