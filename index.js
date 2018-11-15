/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App.js';
import Login from './src/login/Login';
import {StackNavigator}from 'react-navigation';
import SampleAppMovies from "./src/SampleAppMovies";
import Photo from './src/photo/index';
import {TabNva} from './src/TabNva';
import Images from './src/Images';
import Mine from './src/mine/index';

const appNva = StackNavigator({
        app:{screen : App,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        },
        tab: {
            screen: TabNva,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        },
        login :{screen: Login},
        movies : {screen : SampleAppMovies},
        photo:  {screen: Photo},
        images: {screen: Images},
        mine: {screen: Mine}
});
AppRegistry.registerComponent(appName, () => appNva);
