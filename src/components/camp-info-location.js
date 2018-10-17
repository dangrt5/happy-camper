import React from 'react';
import GoogleMap from "./google-maps";

export default class Location extends React.Component {
    state = {
        address1: "",
        address2: "",
    }
    componentDidMount(){
        const {lat, lng} = this.props;
        const geocoder = new google.maps.Geocoder();
        const latLng = new google.maps.LatLng(lat,lng);

        geocoder.geocode( {"location": latLng}, results => {
            // console.log("Geocoder results", results);
            const addressComponents = results[0].address_components;
            this.setState({
                address1: addressComponents[1].short_name,
                address2: `${addressComponents[2].short_name}, ${addressComponents[4].short_name} ${addressComponents[6].short_name}`
            })
        })
    }
    render(){
        const params = {
            lat: this.props.lat,
            lng: this.props.lng
        }
        const list = [params];
        const {address1, address2} = this.state

        const {directionsInfo} = this.props
        return(
        <div className="location">
            {window.navigator.onLine ?
                <GoogleMap hideCard={true} list={list} params={params}/>
                : ''
            }
            <div className="address">
                <div>
                    <p>{address1}</p>
                    <p>{address2}</p>
                </div>
                {/* <button className="directions-button">Directions</button> */}
            </div>
                {directionsInfo ? <div><h1>Directions Info</h1><p>{directionsInfo}</p></div> : ''}
        </div>
        )
    }
}
