import React, {Component} from 'react';

export default (WrappedComponent) => {
    class Auth extends Component {
        componentDidMount(){
            this.checkOnline();
        }
        componentDidUpdate(){
            this.checkOnline();
        }
        checkOnline(){
            console.log(navigator.onLine)
            // if(!this.props.auth){
            //     // this.props.history.push('/sign-in')
            // }
        }
        render(){
            return <WrappedComponent/>;
        }
    }

    return Auth
}
