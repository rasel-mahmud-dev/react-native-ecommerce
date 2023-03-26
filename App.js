import React, {useEffect, useState} from 'react';

import {
    StatusBar, View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Colors from "./src/colors";

import {Provider, useDispatch} from "react-redux"
import store from "./src/store/store";
import AppWrapper from "./src/AppWrapper";
import Profile from "./src/screens/Profile";
import AddProduct from "./src/screens/AddProduct";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainScreen} from "./src/screens/MainScreen";
import AddCategory from "./src/screens/AddCategory";


const App = () => {

    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(
        TRANSITIONS[0],
    );


    const Stack = createNativeStackNavigator();

    const Tab = createBottomTabNavigator();
    // const Drawer = createDrawerNavigator();

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
                <AppWrapper>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
                            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                            <Stack.Screen name="Add-Product" component={AddProduct} options={{headerShown: false}}/>
                            <Stack.Screen name="Add-Category" component={AddCategory} options={{headerShown: false}}/>
                        </Stack.Navigator>
                    </NavigationContainer>

                    {/*<NavigationContainer>*/}
                    {/*    <Drawer.Navigator initialRouteName="Home">*/}
                    {/*        <Drawer.Screen name="Home" component={MainScreen} />*/}
                    {/*        /!*<Drawer.Screen name="Details" component={DetailsScreen} />*!/*/}
                    {/*        /!*<Drawer.Screen name="Contact" component={ContactScreen} />*!/*/}
                    {/*    </Drawer.Navigator>*/}
                    {/*</NavigationContainer>*/}



                </AppWrapper>
            </Provider>
        </>
    );
}

// const TabNavigator = ()=> {
//
//
//     const Tab = createBottomTabNavigator();
//
//
//
//     return (
//         <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
//             {/*<Stack.Screen name="Add-Product" component={AddProduct} options={{headerShown: false}}/>*/}
//             <Tab.Screen name="Home" component={Home} options={{
//                 tabBarLabel: 'Home',
//                 tabBarIcon: ({ color, size }) => (
//                     <MaterialCommunityIcons name="home-outline" color={color} size={size} />
//                 )
//             }} />
//         </Tab.Navigator>
//     );
// }

const WithTab = ()=>{

    const Tab = createBottomTabNavigator();

    return (
        <View>




                <Home />


        </View>
    )
}


export default App
