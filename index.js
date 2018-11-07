/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App.js';
import Login from './src/login/Login';
import {StackNavigator}from 'react-navigation';
import SampleAppMovies from "./src/SampleAppMovies";

const appNva = StackNavigator({
        app:{screen : App,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        },
        login :{screen: Login},
        movies : {screen : SampleAppMovies}
});
AppRegistry.registerComponent(appName, () => appNva);
