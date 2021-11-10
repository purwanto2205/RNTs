/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import RootNavigation from './src/navigations';

const App = () => {
    return (
        <RootNavigation />
    )
}

AppRegistry.registerComponent(appName, () => App);
