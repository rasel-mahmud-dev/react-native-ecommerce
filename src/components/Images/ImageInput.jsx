import React, {useEffect} from 'react';
import {Image, StyleSheet, View, TouchableWithoutFeedback, Alert} from "react-native"
import Colors from "../../colors";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({imageUri, onChangeImage}) => {

    useEffect(() => {
        requestPermission()
        return () => {
        };
    }, []);


    const selectImage = async ()=>{
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: "Images",
                quality: 0.5
            })
            if(!result.canceled){
                onChangeImage(result.uri)
            }
        } catch (ex){
            console.log("Error reading image", ex.message)
        }
    }

    const requestPermission = async ()=>{
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!result.granted){
            alert("You need to enable permission to access the library")
        }
    }

    function handleImageRemove(){
        if(imageUri){
            onChangeImage(null)
        }
    }

    async function handlePress(){

        if(!imageUri) return selectImage()

        Alert.alert("Delete", "Are you sure want to delete this image?", [
            { text: "Yes", onPress: handleImageRemove },
            { text: "No", onPress: ()=>{}  },
        ])
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {imageUri ? (
                    <Image style={styles.image} source={{uri: imageUri}} />
                ) : (
                    <MaterialCommunityIcons size={30} name="camera" />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.c5,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        height: 100,
        width: 100,
    },
    image:{
        width: '100%',
        height: '100%'
    }
})

export default ImageInput;