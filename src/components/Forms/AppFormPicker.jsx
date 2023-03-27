import React from 'react';
import {useFormikContext} from "formik"
import ErrorMessage from "./ErrorMessage";
import {View} from "react-native";
import AppPicker from "../AppPicker";


const AppFormField = ({data, multiple = false, onRemove, name, labelKeyName="name", onPress, ...attr}) => {
    const {setFieldValue, errors, values, touched, setFieldTouched} = useFormikContext()


    function handleToggleElement(item){
        let val = values[name] || []
        let existIndex = val.findIndex((ele)=>ele[labelKeyName] === item[labelKeyName])
        if(existIndex === -1){
            val.push(item)
        } else{
            val.splice(existIndex, 1)
        }
        setFieldValue(name, val)
    }



    return (
        <View>
            {multiple ? (
                <AppPicker
                    multiple={multiple}
                    data={data}
                    onSelectItem={handleToggleElement}
                    onBlur={() => setFieldTouched(name)}
                    selectedItem={values[name]}
                    labelKeyName={labelKeyName}
                    onPress={onPress}
                    {...attr}
                />
            ) : (
                <AppPicker
                    data={data}
                    onSelectItem={(item)=> setFieldValue(name, item)}
                    onBlur={() => setFieldTouched(name)}
                    selectedItem={values[name]}
                    labelKeyName={labelKeyName}
                    onPress={onPress}
                    {...attr}
                />
            )}

            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </View>
    );
};

export default AppFormField;