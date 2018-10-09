import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import Swiper from 'swiper';

import Overview from './camp-info-overview'
import Location from './camp-info-location'
import Weather from './camp-info-weather'

export default class CampInfo extends React.Component {
    render(){
        return (
            <div className="info-container">
                <div className="info-menu">
                    <ul>
                        <li><Link to="/camp/:id/overview">Overview</Link></li>
                        <li><Link to="/camp/:id/location">Location</Link></li>
                        <li><Link to="/camp/:id/weather">Weather</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path={`/camp/:id/overview`} component={Overview} />
                    <Route path={`/camp/:id/location`} component={Location} />
                    <Route path={`/camp/:id/weather`} component={Weather} />
                </Switch>
            </div>

        )
    }
}
