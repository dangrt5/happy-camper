import React from 'react';
import Swiper from 'swiper';
import $ from "jquery";

export default class CampInfo extends React.Component {
    componentDidMount(){
        function setCurrentSlide(ele,index){
            $(".swiper1 .swiper-slide").removeclassName("selected");
            ele.addclassName("selected");
            //swiper1.initialSlide=index;
          }

          var swiper1 = new Swiper('.swiper1', {
                slidesPerView: 5,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true,
                loop: false,
                onTab:function(swiper){
                  var n = swiper1.clickedIndex;
                  alert(1);
                }
            });
          swiper1.slides.each(function(index,val){
            var ele=$(this);
            ele.on("click",function(){
              setCurrentSlide(ele,index);
              swiper2.slideTo(index, 500, false);
              //mySwiper.initialSlide=index;
            });
          });


        var swiper2 = new Swiper ('.swiper2', {
            direction: 'horizontal',
            loop: false,
            autoHeight: true,
            onSlideChangeEnd: function(swiper){
              var n=swiper.activeIndex;
              setCurrentSlide($(".swiper1 .swiper-slide").eq(n),n);
              swiper1.slideTo(n, 500, false);
            }
          });


    }
    render(){
        return (
            <div className="container">
                <div className="swiper-container swiper1">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide selected">推荐</div>
                            <div className="swiper-slide">菜单 2</div>
                            <div className="swiper-slide">菜单 3</div>
                            <div className="swiper-slide">菜单 4</div>
                            <div className="swiper-slide">菜单 5</div>
                        </div>
                </div>
                <div className="swiper-container swiper2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Random shit</div>
                        <div className="swiper-slide">内容 2</div>
                        <div className="swiper-slide">内容 3</div>
                        <div className="swiper-slide">内容 4</div>
                        <div className="swiper-slide">内容 5</div>
                    </div>
                </div>
            </div>
        )
    }
}

{/* <div classNameName="info-container">
<div classNameName="info-menu">
    <ul>
        <li><a href="./campPage-overview.html">Overview</a></li>
        <li><a href="./campPage-location.html">Location</a></li>
        <li><a href="./campPage-weather.html">Weather</a></li>
    </ul>
</div>

<div classNameName="overview">
    <h3>Description</h3>
    <p>Primitive camping is available (seven sites; $15 per night per site; reservations required). Picnic table, food storage box, and pit toilet are provided. No water is available. Distance from landing to campground is one-half mile and includes a 157-stair climb. \n\nWARNING: Western gulls nest on Anacapa Island From April through mid-August. During this time, visitors will encounter seabird rookery conditions: guano, strong odor, constant noise, bird carcasses, and birds protecting their territory.</p>
    <h3>Amenities</h3>
    <div classNameName="amenity-container">
        <div classNameName="amenity-column">
            <div classNameName="amenity-item">
                <img src={reservable}/> <span>Reservable</span>
            </div>
            <div classNameName="amenity-item">
                <img src={wheelchair}/><span>ADA Access</span>
            </div>
            <div classNameName="amenity-item">
                <img src={picnicTables}/> <span>Picnic Tables</span>
            </div>
            <div classNameName="amenity-item">
                <img src={drinkingWater}/><span>Drinking Water</span>
            </div>
            <div classNameName="amenity-item">
                <img src={electricHookups}/> <span>Electric Hookups</span>
            </div>
            <div classNameName="amenity-item">
                    <img src={waterHookups}/><span>Water Hookups</span>
            </div>
            <div classNameName="amenity-item">
                <img src={firesAllowed}/><span>Fires Allowed</span>
            </div>
            <div classNameName="amenity-item">
                <img src={firewood}/> <span>Firewood</span>
            </div>
            <div classNameName="amenity-item">
                <img src={market}/><span>Market</span>
            </div>
        </div>
        <div classNameName="amenity-column">
            <div classNameName="amenity-item">
                <img src={phoneService}/> <span>Phone Service</span>
            </div>
            <div classNameName="amenity-item">
                    <img src={wifi}/><span>Wifi</span>
            </div>
            <div classNameName="amenity-item">
                <img src={petsAllowed}/><span>Pets Allowed</span>
            </div>
            <div classNameName="amenity-item">
                <img src={alcoholAllowed}/> <span>Alcohol Allowed</span>
            </div>
            <div classNameName="amenity-item">
                    <img src={showers}/><span>Showers</span>
            </div>
            <div classNameName="amenity-item">
                <img src={toilets}/> <span>Toilets</span>
            </div>
            <div classNameName="amenity-item">
                <img src={trash}/><span>Trash</span>
            </div>
            <div classNameName="amenity-item">
                    <img src={sanitaryDump}/><span>Sanitary Dump</span>
            </div>
            <div classNameName="amenity-item">
                    <img src={sewerHookup}/> <span>Sewer Hookups</span>
            </div>
        </div>
    </div>

</div>
</div> */}
