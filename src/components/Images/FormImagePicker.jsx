import React from 'react';
import {View, StyleSheet} from "react-native";
import ImageInputList from "./ImageInputList";

const FormImagePicker = (props) => {
    return (
        <View style={styles.container}>
            <ImageInputList imageUris={}/>
        </View>
    );
};


const styles = StyleSheet.create({

})

export default FormImagePicker;