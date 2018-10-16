import React from 'react';
import trash from '../assets/images/icons/trash.png'

export default class ItineraryCard extends React.Component {
  sendToCampPage = (e) => {
    const {id} = this.props.data.parkinfo[0];
    this.props.history.push(`/camp/${id}/overview`);
  }

  render(){
    // console.log("Itinerary Card: ", this.props)
    const {park_img_1} = this.props.data.park_img;
    const {park_name} = this.props.data.parkinfo[0]
    const {id} = this.props.data.parkinfo[0];
    //TODO: turn park name into LINK to camp-page
    return (
        <div className="itinerary-card">
          <img onClick={this.sendToCampPage} src={park_img_1} alt=""/>
          <div onClick={this.sendToCampPage}>
            <h1>{park_name}</h1>
          </div>
          <img onClick={()=>{this.props.trashButton(id)}} className="trash-icon" src={trash}/>
        </div>
    )
  }
}
