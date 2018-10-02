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
          <div>
            <Header path={path}/>
            <div className="container">
              <h1>Itinerary</h1>
            </div>
          </div>
        )
    }
}
