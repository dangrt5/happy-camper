import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../assets/css/itinerary.css"
import Header from "./header";
import ItineraryCard from './itinerary_card'

const dummyData = [{
  name: "Park Name",
  address1: "Angeles Crest Hwy,",
  address2: "Wrightwood, CA 92397",
  image: "https://thedyrt.imgix.net/photo/52799/photo/alabama-brushy-lake-campground_21af9c56af3dd46ea2516cc2f8b18c5d.jpg"
}]

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.match.path,
      list: props.itinerary
    }
  }
    render(){
      //list variable will replace dummyData
      // console.log('Itinerary state', this.state)
      const {path, list} = this.state;
      const itineraryList = dummyData.map((item,index)=>{
          return <ItineraryCard key={index} data={item}/>
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
