/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App.js';
import Login from './src/login/Login';
import { StackNavigator } from 'react-navigation';
import SampleAppMovies from "./src/SampleAppMovies";
import Home from './src/home/index';
import { TabNva } from './src/TabNva';
import Images from './src/Images';
import Mine from './src/mine/index';

//关闭调式模式下的黄屏警告
console.disableYellowBox = true;

const appNva = StackNavigator({
    tab: {
        screen: TabNva,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    login: {
        screen: Login ,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    app: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    movies: { screen: SampleAppMovies },
    photo: { screen: Home },
    images: { screen: Images },
    mine: { screen: Mine }
});
AppRegistry.registerComponent(appName, () => appNva);
