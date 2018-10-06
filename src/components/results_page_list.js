import React from "react";
import resultImg from "../assets/images/resultimg.png";
import Header from "./header";


class ResultsPageList extends React.Component {
  constructor(props) {
    super(props);
    console.log("results page list props", props);

    this.state = {
      history: props.history,
      path: props.match.path,
      params: props.match.params
    }
  }
  render() {
    const {path, params, history} = this.state;
    return (
      <div>
        <Header path={path} history={history} params={params}/>
        <div className="container">
          <div className="card">
            <img src={resultImg}/>
            <div className="info">
              <h1 className="parkName">Park Name</h1>
              <h3>123 Park Street</h3>
              <h3>Big Bear Lake, CA</h3>
              <h3>Phone #</h3>
              <h3>URL: facebook.com</h3>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ResultsPageList
