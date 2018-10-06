import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getSingleItem, clearSingleItem} from '../actions'

import Header from './header';
import CampInfo from './camp-info'
import PhotoCarousel from './camp_images_carousel'
import '../assets/css/campPage.css';

import menuBtn from "../assets/images/happy-camper-logo2-white.png";
import mapBtn from "../assets/images/icons/header/folded-paper-of-a-map.png";

import website from "../assets/images/icons/shortcuts/internet.png";
import phone from "../assets/images/icons/shortcuts/phone.png";
import save from "../assets/images/icons/shortcuts/save.png";

class CampPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.match.path
    }
  }
    componentDidMount(){
        // console.log("item id:", this.props.match.params.itemId)
        // this.props.getSingleItem(this.props.match.params.itemId);
    }
    componentWillUnmount(){
        this.props.clearSingleItem();
    }
    render(){
      const {path} = this.state;
        return (
            <div>
              <Header path={path}/>
                <div className="container camp-page">

                    <div className="camp-title">
                        <h1>Jackson Flats</h1>
                        <h3>California</h3>
                    </div>
                    <div className="shortcuts">
                        <div className="website">
                            <img src={website}/>
                            <p>website</p>
                        </div>
                        <div className="call">
                            <img src={phone}/>
                            <p>call</p>
                        </div>
                        <div className="save">
                            <img src={save}/>
                            <p>save</p>
                        </div>
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
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getSingleItem, clearSingleItem})(CampPage)
