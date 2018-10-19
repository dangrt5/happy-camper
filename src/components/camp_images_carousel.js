import React from 'react';
import Images from './camp_images_carousel_images'

export default class PhotoCarousel extends React.Component {
    deleteDuplicateImages(arr){
        let output = [];
        arr.map(item => {
            output.includes(item) ? '' : output.push(item)
        })
        return output;
    }
    render(){
        let filteredImages = this.deleteDuplicateImages(this.props.images)
        const galleryData = filteredImages.map((item, key) => (
            <Images key={key} openModal={this.props.openModal} src={item}/>
        ))
        return(
            <div className="slider-container">
                <div className="photos-container">
                    {galleryData}
                </div>
            </div>
        )
    }
}
