import React, {useEffect, useState} from 'react';

import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Card from "./components/Card";
import Button from "./components/Button";
import {ScrollView} from "nativewind/dist/preflight";

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {

    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(
        TRANSITIONS[0],
    );

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle(STYLES[0]);
        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };


    const [posts, setPosts] = useState([]);

    useEffect(() => {


        (async function(){
            let posts = await getPosts()
            setPosts(posts)
        }())

        return () => {

        };
    }, []);


    const getPosts = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                return json
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#4a7eff"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />
            <View className="">
                <Text className="font-medium text-2xl px-4 py-3">Products</Text>
                <View className="flex " style={{display: "flex"}}>
                    <ScrollView>
                        {posts.slice(0, 5).map(post=>(
                            <Card
                                style={{margin: 10}}
                                title={post.title}
                                desc={post.body}
                            ></Card>
                        ))}
                    </ScrollView>

                </View>

                <View className="flex-row">
                    <Button title="Checkout"/>
                    <Button title="Checkout"/>
                    <Button title="Checkout"/>
                    <Button title="Checkout"/>
                </View>


                {/*<View>*/}
                {/*    <View style={{flexDirection:'column', gap: 10, flex: 6 }}>*/}
                {/*        <View className="bg-red-400 w-full h-20"/>*/}
                {/*        <View className="bg-red-400 -full h-20"/>*/}
                {/*        <View className="bg-red-400 w-full h-20"/>*/}
                {/*        <View className="bg-red-400 w-full h-20" />*/}
                {/*        <View className="bg-red-400 w-full h-20" />*/}
                {/*        <View className="bg-red-400 w-full h-20" />*/}
                {/*    </View>*/}

                {/*</View>*/}


            </View>
        </SafeAreaView>
    );
}


export default App
