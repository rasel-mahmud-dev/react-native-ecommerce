import React from 'react';
import {ActivityIndicator, Text, View} from "react-native";
import defaultStyles from "../config/styles";

const HttpStatus = ({message, isLoading, isSuccess}) => {
    return (
        <View className="my-4 w-full">
            {isLoading && <ActivityIndicator size="large" color={defaultStyles.color.primary400}/>}
            {!isLoading && message && (
                <Text style={{backgroundColor: isSuccess ? defaultStyles.color.primary100 : defaultStyles.color.red10}}
                    className={`${isSuccess ? "text-white" : "text-red-700"} py-4 px-4 rounded`}>
                    {message}
                </Text>
            )}
        </View>
    )
};

export default HttpStatus;