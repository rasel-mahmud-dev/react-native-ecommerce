import React from 'react';
import {Platform, StyleSheet, TextInput, View} from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyles from "../../config/styles";

const AppTextInput = ({icon, style, ...attr}) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons size={18} style={{marginRight: 5, color: defaultStyles.color.c300}} name={icon} /> }
            <TextInput  style={{...defaultStyles.text, ...style}} {...attr}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.color.c1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        padding: 15,
        marginVertical: 10
    },
})

export default AppTextInput;