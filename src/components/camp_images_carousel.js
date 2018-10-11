import React from 'react';
import dyrtGallery from './dummydata/dyrt_gallery'
import Images from './camp_images_carousel_images'

export default class PhotoCarousel extends React.Component {
    render(){
        let galleryData = [];
        for (let key in this.props.images){
            galleryData.push(
                <Images key={key} src={this.props.images[key]}/>
            )
        }
        // dyrtGallery.map((item,index)=>{
        //     return <Images key={index} src={item}/>
        // })
        return(
            <div className="slider-container">
                <div className="photos-container">
                    {galleryData}
                </div>
            </div>
        )
    }
}
