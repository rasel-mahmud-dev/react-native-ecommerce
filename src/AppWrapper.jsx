import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchAuthAction} from "./store/actions/authAction";
import {getAllBrandsAction} from "./store/actions/brandAction";



const AppWrapper = (props) => {

    const dispatch  = useDispatch()

    useEffect(()=>{
        dispatch(fetchAuthAction()).unwrap().catch((ex)=>{
            console.log(props)
        })
        dispatch(getAllBrandsAction())
    }, [])

    return props.children
};

export default AppWrapper;