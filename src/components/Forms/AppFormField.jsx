import React from 'react';
import {useFormikContext} from "formik"
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import {View} from "react-native";


const AppFormField = ({name, ...attr}) => {
    const {handleChange, errors, values, touched, setFieldTouched} = useFormikContext()

    return (
        <View>
            <AppTextInput
                icon="cube"
                placeholder="Title"
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                {...attr}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </View>
    );
};

export default AppFormField;