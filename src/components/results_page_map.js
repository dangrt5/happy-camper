import React, {Component} from "react";
import GoogleMap from "./google-maps";
import Header from "./header";
import {connect} from "react-redux";
import {getResultsData} from "../actions";

class ResultsPageMap extends Component {
  render() {
    const {list, history, match: {path, params}} = this.props;

    return (
      <div>
        <Header history={history} params={params} path={path}/>
        <GoogleMap list={list} hideCard={false} params={params}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
      list: state.list.results
  }
}

export default connect(mapStateToProps, {getResultsData})(ResultsPageMap)
