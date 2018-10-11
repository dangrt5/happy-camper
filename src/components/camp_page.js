import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getSingleItem, clearSingleItem, addItem, removeItem} from '../actions'

import Header from './header';
import CampInfo from './camp-info'
import PhotoCarousel from './camp_images_carousel'
import '../assets/css/campPage.css';

import save from "../assets/images/icons/shortcuts/save.png";
import isSaved from "../assets/images/icons/shortcuts/saved.png"
import itinerary from './itinerary';

class CampPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.match.path,
      checkSave: false,
    }
  }
    componentDidMount(){
        // console.log("item id:", this.props.match.params.itemId)
        this.props.getSingleItem(this.props.match.params.itemId);
        // if(checkitinerary){
        //     this.setState({
        //         checkSave: true
        //     })
        // }
    }
    // componentDidUpdate(){
    //     console.log(this.checkItinerary())
    // }
    // checkItinerary(){
    //     let check = false;
    //     const thisId = this.props.item.parkinfo[0].id;
    //     const itinerary = this.props.itinerary;
    //     for (let i = 0; i < itinerary.length; i++){
    //         if(itinerary[i].parkinfo[0].id === thisId){
    //             check = true;
    //         }
    //     }
    //     return check;
    // }
    componentWillUnmount(){
        this.props.clearSingleItem();
    }
    saveFunction=()=>{
        if(!this.state.checkSave){
            this.props.addItem(this.props.item)
            this.setState({
                checkSave: true
            })
        } else {
            this.props.removeItem(this.props.item.parkinfo[0].id)
            this.setState({
                checkSave: false
            })
        }

    }
    render(){
        // console.log('Camp Page State', this.state)
        console.log('Camp Page Props', this.props)
      const {path, checkSave} = this.state;
        return (
            <div>
              <Header path={path}/>
                <div className="container camp-page">

                    <div className="camp-title">
                        <h1>Jackson Flats</h1>
                        <h2>California</h2>
                        <img onClick={this.saveFunction} src={checkSave ? isSaved : save}/>
                    </div>

                <PhotoCarousel/>

                <CampInfo />
                </div>
            </div>

        )
    }
}
function mapStateToProps(state){
    return {
        item: state.list.single,
        itinerary: state.list.itinerary
    }
}

export default connect(mapStateToProps, {getSingleItem, clearSingleItem, addItem, removeItem})(CampPage)
