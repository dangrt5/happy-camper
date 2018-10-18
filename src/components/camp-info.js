import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import Overview from './camp-info-overview'
import Location from './camp-info-location'
import Weather from './camp-info-weather'

export default class CampInfo extends React.Component {
    navClickHandler(event){
        document.querySelector('.active').classList.remove('active')
        event.target.classList.add("active")
    }
    render(){
        // console.log('Camp Page Props: ', this.props)
        let {id} = this.props.match.params;
        let {lat, lng} = this.props.item.parkinfo[0]
        let directionsInfo = this.props.item.parkinfo[0].direction_info
        return (
            <div className="info-container">
                <div className="info-menu">
                    <ul>
                        <li onClick={this.navClickHandler}><Link className='active' to={`/camp/${id}/overview`}>Overview</Link></li>
                        <li onClick={this.navClickHandler}><Link to={`/camp/${id}/location`}>Location</Link></li>
                        <li onClick={this.navClickHandler}><Link to={`/camp/${id}/weather`}>Weather</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path={`/camp/:id/overview`} render={
                        props => <Overview {...this.props}/>
                    }/>
                    <Route path={`/camp/:id/location`} render={
                        props => <Location lat={lat} lng={lng} directionsInfo={directionsInfo}/>
                    }/>
                    <Route path={`/camp/:id/weather`} render={
                        props => <Weather lat={lat} lng={lng}/>
                    }/>
                </Switch>
            </div>

        )
    }
}
