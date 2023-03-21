import React, {useEffect, useState} from 'react';

import {
    Platform,
    SafeAreaView,
    StatusBar,
    FlatList,
    Text,
    TextInput,
    ScrollView,
    View, Modal, TextInputComponent,
} from 'react-native';

import Button from "./src/components/Button";

import Login from "./src/screens/Login";

import {NativeRouter, createMemoryRouter, Link, Route, RouterProvider} from "react-router-native";

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const router = createMemoryRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

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
    const [isOpenModal, setOpenModal] = useState(false);


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


    function handleChange(e){
        console.log(e)
    }

    function handleLoadMore(){
        console.log("click")
    }

    function handleAddNew(){
        console.log("new added")
        setPosts((prev)=>([
            {title: "New item", id: new Date(), body: "jkdsdhf"},
            ...prev
        ]))
    }

    function handleToggleModal(){
        setOpenModal(!isOpenModal)
    }

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#4a7eff"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />

            <Login />


            {/*<NativeRouter>*/}
            {/*    <RouterProvider router={router} />*/}
            {/*</NativeRouter>*/}

            {/*<TextInputComponent />*/}

            {/*<View className="">*/}
            {/*    <Text className="font-medium text-2xl px-4">Products</Text>*/}
            {/*    <View>*/}
            {/*        <Modal  animationType="slide" animated={true} visible={isOpenModal} >*/}
            {/*            <View className="w-full mx-auto bg-gray-100 h-full pt-20">*/}
            {/*                <Login />*/}
            {/*            </View>*/}
            {/*        </Modal>*/}



            {/*        <ScrollView className="">*/}

            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}
            {/*            /!*<Button title="Checkout"/>*!/*/}

            {/*            <View className="flex flex-row items-center w-full flex-1 px-4">*/}
            {/*                <TextInput onChangeText={handleChange} placeholder="Enter Post title" className="flex-1" />*/}
            {/*                <Button onClick={handleToggleModal} title="Add"/>*/}
            {/*            </View>*/}


            {/*            /!*<FlatList*!/*/}
            {/*            /!*        data={posts.slice(0, 10)}*!/*/}
            {/*            /!*        renderItem={(itemData)=>{*!/*/}
            {/*            /!*            return (*!/*/}
            {/*            /!*                <Card key={itemData.index}*!/*/}
            {/*            /!*                      style={{margin: 10}}*!/*/}
            {/*            /!*                      title={itemData.item.title}*!/*/}
            {/*            /!*                      desc={itemData.item.body}*!/*/}
            {/*            /!*                ></Card>*!/*/}
            {/*            /!*            )*!/*/}
            {/*            /!*        }}>*!/*/}
            {/*            /!*    </FlatList>*!/*/}

            {/*            /!*<Button title="Load More"/>*!/*/}
            {/*            /!*<Button title="Load More"/>*!/*/}
            {/*            /!*<Button title="Load More" onClick={handleLoadMore}/>*!/*/}


            {/*        </ScrollView>*/}

            {/*    </View>*/}




            {/*    /!*<View>*!/*/}
            {/*    /!*    <View style={{flexDirection:'column', gap: 10, flex: 6 }}>*!/*/}
            {/*    /!*        <View className="bg-red-400 w-full h-20"/>*!/*/}
            {/*    /!*        <View className="bg-red-400 -full h-20"/>*!/*/}
            {/*    /!*        <View className="bg-red-400 w-full h-20"/>*!/*/}
            {/*    /!*        <View className="bg-red-400 w-full h-20" />*!/*/}
            {/*    /!*        <View className="bg-red-400 w-full h-20" />*!/*/}
            {/*    /!*        <View className="bg-red-400 w-full h-20" />*!/*/}
            {/*    /!*    </View>*!/*/}

            {/*    /!*</View>*!/*/}


            {/*</View>*/}
        </SafeAreaView>
    );
}


export default App
