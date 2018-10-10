import React from 'react';
import dummyImage from '../assets/images/resultimg.png';
import trash from '../assets/images/icons/trash.png'

export default props => {
    return (
        <div className="itinerary-card">
          <img src={dummyImage} alt=""/>
          <div>
            <h1>Park Name</h1>
            <p>Angeles Crest Hwy,</p>
            <p>Wrightwood, CA 92397</p>
          </div>
          <img className="trash-icon" src={trash}/>
        </div>
    )
}
