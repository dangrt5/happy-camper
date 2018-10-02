import React from 'react';
import dyrtGallery from './dummydata/dyrt_gallery'
import Images from './camp_images_carousel_images'

export default class PhotoCarousel extends React.Component {
    render(){
        const galleryData = dyrtGallery.map((item,index)=>{
            return <Images key={index} src={item}/>
        })
        return(
            <div className="slider-container">
                <div className="photos-container">
                    {galleryData}
                </div>
            </div>
        )
    }
}
