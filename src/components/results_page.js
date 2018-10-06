import React, {Component} from 'react';
import "../assets/css/resultsPage.css"
import Header from "./header";

import ResultsPageMap from "./results_page_map";
import ResultsPageList from "./results_page_list";
import {Route} from "react-router-dom";

import { connect } from 'react-redux';
import {getResultsData} from '../actions/index'

class ResultsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path : props.match.path
    }
  }

  componentDidMount(){
    // this.props.getResultsData();
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

function mapStateToProps(state){
  return {
      list: state.list.results
  }
}

export default connect(mapStateToProps, {getResultsData})(ResultsPage)
