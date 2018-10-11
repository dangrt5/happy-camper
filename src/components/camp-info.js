import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import { connect } from 'react-redux';
import {getSingleItem} from '../actions'

import Overview from './camp-info-overview'
import Location from './camp-info-location'
import Weather from './camp-info-weather'

class CampInfo extends React.Component {
    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id); //66019
    }
    render(){
        console.log('Camp Page Props', this.props.item)
        let description = "Loading..."
        let {id} = this.props.match.params
        if(typeof this.props.item.parkinfo !== 'undefined'){
            description = this.props.item.parkinfo[0].park_desc;
        }
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

function mapStateToProps(state){
    return {
        item: state.list.single,
    }
}

export default connect(mapStateToProps, {getSingleItem})(CampInfo)

//TODO: use variables in LINK TO=`${}`
