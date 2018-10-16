import React from 'react';
import trash from '../assets/images/icons/trash.png'
import { connect } from 'react-redux';
import {removeItem} from '../actions'

class ItineraryCard extends React.Component {
  trashButton=()=>{
    console.log('Trash Clicked')
    this.props.removeItem(1); //change this to itemID!!! needs to be passed through props
    //TODO: refresh the page
  }
  sendToCampPage = (e) => {
    const {id} = this.props.data.parkinfo[0];
    this.props.history.push(`/camp/${id}/overview`);
  }

  render(){
    console.log("Itinerary Card: ", this.props)
    const {park_img_1} = this.props.data.park_img;
    const {park_name} = this.props.data.parkinfo[0]
    //TODO: turn park name into LINK to camp-page
    return (
        <div className="itinerary-card">
          <img onClick={this.sendToCampPage} src={park_img_1} alt=""/>
          <div onClick={this.sendToCampPage}>
            <h1>{park_name}</h1>
          </div>
          <img onClick={this.trashButton} className="trash-icon" src={trash}/>
        </div>
    )
  }
}

export default connect(null,{removeItem})(ItineraryCard)
