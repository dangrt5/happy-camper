import React from "react";
import Header from "./header";
import CampSiteCard from "./results_page_list_card";
import {connect} from "react-redux";
import {getResultsData} from "../actions";



class ResultsPageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: props.history,
      path: props.match.path,
      params: props.match.params
    }
  }

  render() {
    const {history, match: {path, params}} = this.props
    const {list} = this.props;

    let campDetails;

    if (typeof list === 'undefined'){
      campDetails = (
      <div className="no-results">
        <h1>No Results Found</h1>
        <p>Please try again! Did you search within California?</p>
      </div>
    )} else {
        campDetails = list.map(item => {
        return <CampSiteCard history={history} key={item.id} details={item}/>
      });
    }

    return (
      <div>
        <Header path={path} history={history} params={params}/>
        <div className="container">
          {campDetails}
        </div>
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
      list: state.list.results
  }
}

export default connect(mapStateToProps, {getResultsData})(ResultsPageList)
