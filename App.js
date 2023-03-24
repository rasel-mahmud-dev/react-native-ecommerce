import React, {useEffect, useState} from 'react';

import {
    StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Colors from "./src/colors";

import {Provider} from "react-redux"
import store from "./src/store/store";

const App = () => {

    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(
        TRANSITIONS[0],
    );


    const Stack = createNativeStackNavigator();


    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor={Colors.primary400}
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />

            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}


export default App
