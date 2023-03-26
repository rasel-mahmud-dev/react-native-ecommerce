import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchAuthAction} from "./store/actions/authAction";



const AppWrapper = (props) => {

    const dispatch  = useDispatch()

    useEffect(()=>{
        dispatch(fetchAuthAction())
    }, [])

    return props.children
};

export default AppWrapper;