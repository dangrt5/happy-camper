import React from 'react';

export default props => (
    <div className="photo-slide">
        <img src={props.src} onClick={props.openModal}/>
    </div>
)
