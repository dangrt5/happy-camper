import React, {Component} from 'react';
import "../assets/css/resultsPage.css"
import Header from "./header";

import ResultsPageMap from "./resultsPageMap";
import ResultsPageList from "./resultsPageList";
import {Route} from "react-router-dom";

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path : props.match.path
    }
  }

    render(){
      const {path} = this.state;
      return (
        <div>
          <Route path="/search/:lat/:lng/list" component={ResultsPageList}/>
          <Route path="/search/:lat/:lng/map" component={ResultsPageMap}/>
        </div>
      )
    }
}
