import React from 'react';
import {useFormikContext} from "formik"
import ErrorMessage from "./ErrorMessage";
import {Text, View, StyleSheet} from "react-native";
import ImageInput from "../Images/ImageInput";
import defaultStyles from "../../config/styles";
import ImageInputList from "../Images/ImageInputList";


const AppFormImagePicker = ({data, multiple = false,placeholder, name, ...attr}) => {
    const {setFieldValue, errors, values, touched, setFieldTouched} = useFormikContext()



    function handleAdd(imageUri){
        let val = values[name] || []
        val.push(imageUri)
        setFieldValue(name, val)
    }

    function handleRemove(imageUri){
        let val = values[name] || []
        setFieldValue(name, val.filter(uri=> uri !== imageUri))
    }

    return (
        <View className="mt-4">
            <Text style={styles.label}>{placeholder}</Text>
            <View>
                {multiple ? (
                    <ImageInputList
                        onRemoveImage={handleRemove}
                        imageUris={values[name]}
                        onAddImage={handleAdd}
                        onBlur={() => setFieldTouched(name)}
                    />
                ) : (
                    <ImageInput
                        onRemoveImage={handleRemove}
                        imageUri={values[name]}
                        onChangeImage={(imageUri)=>setFieldValue(name, imageUri)}
                        onBlur={() => setFieldTouched(name)}
                        {...attr}
                    />
                )}
                <ErrorMessage error={errors[name]} visible={touched[name]}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label:{
        color: defaultStyles.color.c100,
        fontSize: 16,
        marginBottom: 4
    }
})

export default AppFormImagePicker;