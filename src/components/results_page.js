import React, {Component} from 'react';
import "../assets/css/resultsPage.css"
import Header from "./header";
import resultImg from "../assets/images/resultimg.png";

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
        <div className="container">
          <Header path={path}/>
            <div className="card">
              <img src={resultImg}/>
            <div className="info">
              <h1>Park Name</h1>
              <h3>123 Park Street</h3>
              <h3>Big Bear Lake, CA</h3>
              <h3>Phone #</h3>
              <h3>URL: facebook.com</h3>
            </div>
            </div>
      </div>
      )
    }
}
