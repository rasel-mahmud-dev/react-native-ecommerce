import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage, ...attr}) => {

    const scrollView = useRef()


    return (
        <ScrollView
            horizontal={true}
            ref={scrollView}
            onContentSizeChange={() => scrollView.current.scrollToEnd()}>
            <View style={styles.container}>
                {imageUris.map((imageUri) => (
                    <View key={imageUri} style={styles.image}>
                        <ImageInput
                            imageUri={imageUri}
                            onChangeImage={() => onRemoveImage(imageUri)} {...attr} />
                    </View>
                ))}
                <ImageInput onChangeImage={uri => onAddImage(uri)}/>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image: {
        marginRight: 6
    }
})

export default ImageInputList;