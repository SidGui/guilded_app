import React from 'React';
import {Router, Scene} from 'react-native-router-flux';
import LoginScene from '../scenes/Login/LoginScene';
import HomeScene from '../scenes/Home/HomeScene';

export default class Routes extends React.Component {

    render() {
        return(
        <Router>
            <Scene key="root">
                <Scene key="login"
                    component={LoginScene}
                    title="Login"
                    hideNavBar={true}
                >
                </Scene>
                <Scene key="home"
                    component={HomeScene}
                    title="Home"
                    lef
                >
                </Scene>
            </Scene>
        </Router>
        )};
    
}