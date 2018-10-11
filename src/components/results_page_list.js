import React from "react";
import resultImg from "../assets/images/resultimg.png";
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

    const campDetails = list.map(item => {
      return <CampSiteCard history={history} key={item.id} details={item}/>
    });

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
