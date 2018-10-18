import React, {Component} from 'react';

export default (WrappedComponent) => {
    class Check extends Component {
        componentDidMount(){
            this.checkOnline();
        }
        componentDidUpdate(){
            this.checkOnline();
        }
        checkOnline(){
            // console.log("Online or Offline", window.navigator.onLine)
            if(!window.navigator.onLine){
                this.props.history.push('/itinerary')
            }
        }
        render(){
            return <WrappedComponent {...this.props}/>;
        }
    }

    return Check
}
