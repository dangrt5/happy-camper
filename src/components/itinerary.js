import React, {Component} from 'react';
import "../assets/css/itinerary.css"
import Header from "./header";
import ItineraryCard from './itinerary_card'

const dummyData = [{
  name: "Park Name",
  address1: "Angeles Crest Hwy,",
  address2: "Wrightwood, CA 92397",
  image: "https://thedyrt.imgix.net/photo/52799/photo/alabama-brushy-lake-campground_21af9c56af3dd46ea2516cc2f8b18c5d.jpg"
}]

export default class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
      list: null,
    }
  }
  componentDidMount(){
    this.setState({
      path: this.props.match.path
    })
  }
    render(){
      const {path} = this.state;
      const {itineraryList} = dummyData.map((item,index)=>{
          <ItineraryCard key={item} data={item}/>
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
