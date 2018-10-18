import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../actions'
import "../assets/css/itinerary.css"
import Header from "./header";
import ItineraryCard from './itinerary_card'

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.match.path,
    }
  }
  trashButton=(id)=>{
    this.props.removeItem(id);
  }
    render(){
      // console.log('Itinerary props', this.props.itinerary)
      const {path} = this.state;
      const list = this.props.itinerary;
      const itineraryList = list.map((item,index)=>{
          return <ItineraryCard trashButton={this.trashButton} history={this.props.history} key={index} data={item}/>
      })
        return (
          <div>
            <Header path={path}/>
              <div className="container">
                {itineraryList}
                {window.navigator.onLine ?
                  '' :
                  <div className="offline-bar">
                    <p>OFFLINE: Only saved campsites are accessible</p>
                  </div>
                }
              </div>
          </div>
        )
    }
}

function mapStateToProps(state){
  return {
      itinerary: state.list.itinerary
  }
}

export default connect(mapStateToProps,{removeItem})(Itinerary)
