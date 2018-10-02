import React, {Component} from 'react';
import "../assets/css/resultsPage.css"

export default class ResultsPage extends Component {
    render(){
        return (
        <div class="container">
            <div class="card">
                <img src="../assets/images/resultimg.png" alt=""/>
            <div class="info">
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
