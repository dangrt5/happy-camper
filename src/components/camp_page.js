import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getSingleItem, clearSingleItem, addItem, removeItem} from '../actions'
import axios from 'axios';
import config from './config/config'
import Header from './header';
import CampInfo from './camp-info'
import PhotoCarousel from './camp_images_carousel'
import '../assets/css/campPage.css';

import save from "../assets/images/icons/shortcuts/save.png";
import isSaved from "../assets/images/icons/shortcuts/saved.png"

class CampPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.match.path,
      checkSave: false,
      resultsPath: '/'
    }
  }
    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id);
        this.checkItinerary();
        if(this.props.location.state){
            this.setState({
                resultsPath: this.props.location.state.resultsPath,
            })
        }

    }
    componentDidUpdate(){
        console.log('test')
    }
    checkItinerary(){
        let check = false;
        const thisId = this.props.match.params.id;
        const itinerary = this.props.itinerary;
        for (let i = 0; i < itinerary.length; i++){
            if(itinerary[i].parkinfo[0].id === thisId){
                check = true;
            }
        }
        if(check){
            this.setState({
                checkSave: true
            })
        }
    }
    componentWillUnmount(){
        this.props.clearSingleItem();
    }
    saveFunction=()=>{
        if(!this.state.checkSave){
            this.props.addItem(this.saveWeatherInformation())
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
    async saveWeatherInformation(){
        const {lat, lng} = this.props.item.parkinfo[0]
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&units=imperial&cnt=15&appid=${config.WEATHER_KEY}`)
        let {item} = this.props;
        item.weather = resp.data.list;
        return item;
    }
    openModal(event){
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById("img");
        modal.style.display = "block";
        modalImg.src = event.target.src;
    }
    closeModal(){
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
    render(){
        if(!this.props.item.parkinfo){
            return <div className="loading-spinner"></div>
        }
        const name = this.props.item.parkinfo[0].park_name
        const {path, checkSave, resultsPath} = this.state;
        return (
            <div>
              <Header resultsPath={resultsPath} history={this.props.history} path={path}/>
                <div className="container camp-page">

                    <div className="camp-title">
                        <h1>{name}</h1>
                        <img onClick={this.saveFunction} src={checkSave ? isSaved : save}/>
                    </div>
                <div id="myModal" className="modal">
                    <span onClick={this.closeModal} className="close">&times;</span>
                    <img className="modal-content" id="img"/>
                </div>
                <PhotoCarousel openModal={this.openModal} images={Object.values(this.props.item.park_img)}/>

                <CampInfo {...this.props}/>
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
        item: state.list.single,
        itinerary: state.list.itinerary,
    }
}

export default connect(mapStateToProps, {getSingleItem, clearSingleItem, addItem, removeItem})(CampPage)
