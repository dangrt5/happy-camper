import React, {Component} from "react";
import GoogleMap from "./google-maps";
import Header from "./header";

class ResultsPageMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: props.history,
      path: props.match.path,
      params: props.match.params
    }
  }
  render() {
    const {path, history, params} = this.state;
    return (
      <div>
        <Header history={history} params={params} path={path}/>
        <GoogleMap params={params}/>
      </div>
    )
  }
}

export default ResultsPageMap;
