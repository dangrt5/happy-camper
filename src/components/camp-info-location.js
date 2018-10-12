import React from 'react';
import GoogleMap from "./google-maps";

export default class Location extends React.Component {
    render(){
        const params = {
            lat: this.props.lat,
            lng: this.props.lng
        }
        const list = [params];
        console.log("List", list);
        const address1 = "Angeles Crest Hwy"
        const address2 = "Wrightwood, CA 92397"

        return(
        <div className="location">
            <GoogleMap hideCard={true} list={list} params={params}/>
            <div className="address">
                <div>
                    <p>{address1}</p>
                    <p>{address2}</p>
                </div>
                <button className="directions-button">Directions</button>
            </div>
        </div>
        )
    }
}
