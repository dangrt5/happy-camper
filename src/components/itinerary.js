import React, {Component} from 'react';
import Header from "./header";

export default class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.match.path
    }
  }
    render(){
      const {path} = this.state;
        return (
          <div className="container">
            <Header path={path}/>
            <h1>Itinerary</h1>
          </div>

        )
    }
}
