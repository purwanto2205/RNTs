import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../containers'

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name='Home' component={Home} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation