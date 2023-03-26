import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import defaultStyles from "../../config/styles";

const ErrorMessage = ({error, visible}) => {
    if (!error || !visible) return null
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    error: {
        color: defaultStyles.color.red400
    }
})


export default ErrorMessage;