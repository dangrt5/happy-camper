import React from 'react';
import dummyImage from '../assets/images/resultimg.png';

export default props => {
    return (
        <div className="card">
          <img src={dummyImage} alt=""/>>
          <div className="info">
            <h1>Park Name</h1>
            <h3>123 Park Street</h3>
            <h3>Big Bear Lake, CA</h3>
            <h3>Phone #</h3>
            <h3>URL: facebook.com</h3>
          </div>
        </div>
    )
}
