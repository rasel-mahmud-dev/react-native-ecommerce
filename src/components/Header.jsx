import React from 'react';
import {View, StyleSheet, TextInput, Text, Pressable} from "react-native";
import defaultStyles from "../config/styles";
import {AntDesign, EvilIcons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

const Header = ({onOpenSearchProductModal}) => {

    const navigation = useNavigation()

    function goLoginPage(){
        navigation.navigate("Login")
    }

    return (
        <View>
            <View style={styles.container} >

                <View className="flex-row items-center justify-between">
                    <Pressable onPress={onOpenSearchProductModal} style={styles.inputWrapper}>
                        <EvilIcons style={styles.searchIcon} name="search" />
                        <Text style={styles.input}>Enter product name</Text>
                    </Pressable>
                    <AntDesign onPress={goLoginPage} name="login" style={styles.loginIcon} />
                </View>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.color.primary400,
        height:150,
    },
    inputWrapper:{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        backgroundColor: "white",
        marginHorizontal: 20,
        borderRadius: 6,
        paddingHorizontal: 10
    },
    input:{
        fontSize: 14,
        fontWeight: "400",
        paddingHorizontal: 4,
        color: defaultStyles.color.c20
    },
    searchIcon: {
        fontSize: 24,
        color: defaultStyles.color.c100
    },
    loginIcon: {
        fontSize: 20,
        paddingRight: 20,
        color: defaultStyles.color.c0
    }
})

export default Header;