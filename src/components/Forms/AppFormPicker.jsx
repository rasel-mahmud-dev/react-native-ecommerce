import React from 'react';
import {useFormikContext} from "formik"
import ErrorMessage from "./ErrorMessage";
import {View} from "react-native";
import AppPicker from "../AppPicker";


const AppFormField = ({data, name, ...attr}) => {
    const {setFieldValue, errors, values, touched, setFieldTouched} = useFormikContext()

    return (
        <View>
            <AppPicker
                data={data}
                onSelectItem={(item)=>setFieldValue(name, item)}
                onBlur={() => setFieldTouched(name)}
                selectedItem={values[name]}
                {...attr}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </View>
    );
};

export default AppFormField;