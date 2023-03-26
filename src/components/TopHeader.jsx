import React from 'react';
import Colors from "../colors";
import {Pressable, Text, View} from "react-native";

const TopHeader = (props) => {

    const {title, children, onAction} = props

    function handleGoBack() {
        onAction && onAction()
    }

    return (
        <View style={{backgroundColor: Colors.primary300, paddingVertical: 10, paddingHorizontal: 10}}>
            <Pressable onPress={handleGoBack}>
                {title ? (
                    <Text style={{color: Colors.c0, fontWeight: "bold"}}>{title}</Text>

                ) : (
                    children
                )}
            </Pressable>
        </View>

    );
};

export default TopHeader;