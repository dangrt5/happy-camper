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
        this.props.getSingleItem(this.props.match.params.id);
        this.checkItinerary();
    }
    componentDidUpdate(){
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
            return <h1>LOADING...</h1>
        }
        const name = this.props.item.parkinfo[0].park_name
        const {path, checkSave} = this.state;
        // console.log('Camp Page: ', this.props)
        return (
            <div>
              <Header path={path}/>
                <div className="container camp-page">

                    <div className="camp-title">
                        <h1>{name}</h1>
                        <img onClick={this.saveFunction} src={checkSave ? isSaved : save}/>
                    </div>
                <div id="myModal" className="modal">
                    <span onClick={this.closeModal} className="close">&times;</span>
                    <img className="modal-content" id="img"/>
                </div>
                <PhotoCarousel openModal={this.openModal} images={this.props.item.park_img}/>

                <CampInfo {...this.props}/>
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
