import React from 'react';
import {Image, Text, View, StyleSheet, Pressable} from "react-native";
import fullImagePath from "../utills/fullImagePath";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useSelector} from "react-redux";
import Colors from "../colors";
import Button from "../components/Button";
import withAuth from "../HOC/withAuth";



const Profile = ({navigation}) => {

    const {auth} = useSelector(state => state.authState)


    const spacing = '1.25rem';

    return (
        <View>
            <View className={"bg-blue-100 p-4"}>
                { auth ? (
                    <View className="relative">
                        <Image style={{width: 100, height: 100, borderRadius: 100}} source={{
                            uri: fullImagePath(auth?.avatar)
                        }}/>

                        <View className="flex flex-row items-center mt-2">
                            <Text className="text-xl font-medium" style={{color:Colors.c40}}>{auth.firstName}</Text>
                            <Text className="text-xl font-medium" style={{color: Colors.c300}}>{auth.lastName}</Text>
                        </View>

                        <Text className="text-sm font-medium" style={{color: Colors.c100}}>{auth.email}</Text>

                        <View className="absolute right-0 top-0">
                            <FontAwesome  size={20} name="edit" />
                        </View>
                    </View>
                ) : (
                    <View style={{backgroundColor: Colors.primary400}}>
                        <Pressable style={{marginHorizontal: 10}} onPress={()=>navigation.navigate("Login")}><Text>Login</Text></Pressable>
                    </View>
                ) }
            </View>


            <View className="mt-10 px-5">
                <View style={{flexDirection: "row"}}>
                    <Button style={{marginHorizontal: 10}} onPress={()=>navigation.navigate("Add-Product")}>Add Product</Button>
                    <Button style={{marginHorizontal: 5}} onPress={()=>navigation.navigate("Add-Category")}>Add Category</Button>
                    <Button style={{marginHorizontal: 5}} onPress={()=>navigation.navigate("Add-Brand")}>Add Brand</Button>
                </View>
            </View>

        </View>
    );
};



export default withAuth(Profile);