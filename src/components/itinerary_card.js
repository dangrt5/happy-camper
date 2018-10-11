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
  render(){
    // console.log("Itinerary Card: ", this.props)
    const {name, address1, address2, image} = this.props.data
    //TODO: turn park name into LINK to camp-page
    return (
        <div className="itinerary-card">
          <img src={image} alt=""/>
          <div>
            <h1>{name}</h1>
            <p>{address1}</p>
            <p>{address2}</p>
          </div>
          <img onClick={this.trashButton} className="trash-icon" src={trash}/>
        </div>
    )
  }
}

export default connect(null,{removeItem})(ItineraryCard)
