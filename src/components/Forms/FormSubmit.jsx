import React from 'react';
import {useFormikContext} from "formik";
import Button from "../Button";

const FormSubmit = ({title, children, ...attr}) => {
    const {handleSubmit} = useFormikContext()
    return (
        <Button onPress={handleSubmit} {...attr}>{  children ?  children : title}</Button>
    );
};

export default FormSubmit;