import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Home from "./Home";
import Profile from "./Profile";
import Colors from "../colors";



const HomePage =()=>(
    <View>
        <Text>sdklfjskdfj</Text>
    </View>
)

export function MainScreen(props) {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            sceneContainerStyle={{

                    backgroundColor: "#fafafa"


            }}

            screenOptions={({ route }) => ({
                tabBarLabel: "",
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "ios-home";
                    if(route.name === 'Home') {

                    }
                    else if (route.name === 'Details') {
                        iconName = 'ios-list';
                    } else if (route.name === 'Contact') {
                        iconName = 'ios-call';
                    }

                    return <Ionicons name={iconName} size={22} color={color} />;
                },
                tabBarStyle: {
                    backgroundColor: "#fff",
                    position: "absolute",
                    margin: 10,
                    borderRadius: 20,
                    shadowRadius: 4,
                    border: 0,
                    shadowColor: Colors.c700,
                    shadowOpacity: .5,
                    elevation: 4,
                    shadowOffset: {width: 2, height: 0}

                }
            })}>
            <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />

            <Tab.Screen
                name="Profile"
                options={{
                    headerShown: false,

                    showLabel: false,
                    tabBarIcon: ({ focused, color, size }) => <AntDesign  size={22} color={Colors.c800} name="user"/>}}
                component={Profile}
            />
            {/*<Tab.Screen name="Details" component={DetailsScreen} />*/}
            {/*<Tab.Screen name="Contact" component={ContactScreen} />*/}
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});