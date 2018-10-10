import React, {Component} from 'react';
import "../assets/css/resultsPage.css"
import Header from "./header";

import ResultsPageMap from "./results_page_map";
import ResultsPageList from "./results_page_list";
import {Route} from "react-router-dom";

import { connect } from 'react-redux';
import {getResultsData} from '../actions/index'

class ResultsPage extends Component {

  componentDidMount(){
    const {lat, lng} = this.props.match.params
    this.props.getResultsData(lat, lng);
    console.log("this state", this.state);
  }

    render(){

      const {path, list} = this.props.match;
      return (
        <div className="results">
          <Route list={list} path="/search/:lat/:lng/list" component={ResultsPageList}/>
          <Route list={list} path="/search/:lat/:lng/map" component={ResultsPageMap}/>
        </div>
      )
    }
}

function mapStateToProps(state){
  return {
      list: state.list.results
  }
}

export default connect(mapStateToProps, {getResultsData})(ResultsPage)
