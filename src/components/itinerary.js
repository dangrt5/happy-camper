import React, {Component} from 'react';
import "../assets/css/itinerary.css"
import Header from "./header";
import ItineraryCard from './itinerary_card'

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
        return (
          <div>
            <Header path={path}/>
            <div className="container">
              <ItineraryCard/>
            </div>
          </div>
        )
    }
}
