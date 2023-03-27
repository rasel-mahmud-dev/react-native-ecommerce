import React from 'react';
import {View, StyleSheet, TextInput, Image, FlatList} from "react-native";
import defaultStyles from "../config/styles";
import {AntDesign, EvilIcons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import fullImagePath from "../utills/fullImagePath";

const HeaderCategoryView = ({categories}) => {

    const navigation = useNavigation()

    function goLoginPage(){
        navigation.navigate("Login")
    }

    return (
        <View>
            <View style={styles.container} >
                <FlatList showsHorizontalScrollIndicator={false}  data={categories} horizontal={true} renderItem={({item})=>(
                    <View style={styles.imageWrapper} >
                        <Image style={styles.img}  source={{
                            uri: fullImagePath(item.image)
                        }}/>
                    </View>
                )}>

                </FlatList>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        // backgroundColor: defaultStyles.color.primary400,
        // height: 90,
    },
    inputWrapper:{
        // flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // paddingVertical: 6,
        backgroundColor: "white",
        // marginHorizontal: 20,
        borderRadius: 6,
        // paddingHorizontal: 10
    },
    input:{
        fontSize: 16,
        fontWeight: "400",
        paddingHorizontal: 4
    },
    searchIcon: {
        fontSize: 24,
        color: defaultStyles.color.c100
    },
    loginIcon: {
        fontSize: 20,
        paddingRight: 20,
        color: defaultStyles.color.c0
    },
    imageWrapper:{
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
        backgroundColor: "rgba(44,101,236,0.17)",
        margin: 5
    },
    img:{
        width: "100%",
        height: "100%",
    }
})

export default HeaderCategoryView;