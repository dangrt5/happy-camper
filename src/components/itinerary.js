import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../assets/css/itinerary.css"
import Header from "./header";
import ItineraryCard from './itinerary_card'

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.match.path,
      list: props.itinerary
    }
  }
    render(){
      // console.log('Itinerary state', this.props)
      const {path, list} = this.state;
      const itineraryList = list.map((item,index)=>{
          return <ItineraryCard history={this.props.history} key={index} data={item}/>
      })
        return (
          <div>
            <Header path={path}/>
            <div className="container">
              {itineraryList}
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

export default connect(mapStateToProps)(Itinerary)
