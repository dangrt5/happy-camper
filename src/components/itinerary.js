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
      internet: true,
    }
  }
  componentDidMount(){
    this.setState({
      internet: window.navigator.onLine
    })
    setInterval(()=>{
      if(window.navigator.onLine !== this.state.internet){
          this.setState({
              internet: window.navigator.onLine
          })
      }
    }, 500);
  }
  trashButton=(id)=>{
    this.props.removeItem(id);
  }
    render(){
      const {path, internet} = this.state;
      const list = this.props.itinerary;
      const itineraryList = list.map((item,index)=>{
          return <ItineraryCard trashButton={this.trashButton} history={this.props.history} key={index} data={item}/>
      })
        return (
          <div>
            <Header path={path}/>
              <div className="container">
              {list.length !== 0 ? itineraryList : <h1 className="empty-itinerary">There are no items in your itinerary.</h1>}
                {internet ?
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
