import { View, Text, StyleSheet, Image, Dimensions} from "react-native";
import React, {useState} from "react";
import useHttpStatus from "../../src/hooks/useHttpStatus";
import Colors from "../colors";
import {loginAction} from "../store/actions/authAction";
import {useDispatch, useSelector} from "react-redux";

import FormSubmit from "../components/Forms/FormSubmit";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import * as Yup from "yup";
import HttpStatus from "../components/HttpStatus";
import TopHeader from "../components/TopHeader";


const Login = ({navigation}) => {

    // const screenWidth = Dimensions.get("window").width
    // const authState = useSelector(state=>state)

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required().min(3).max(255).label("Email"),
        password: Yup.string().required().label("Password"),
    })

    const dispatch = useDispatch()
    const status = useHttpStatus()

    async function handleLogin(userData) {
        status.isLoading = true
        dispatch(loginAction({
            email: userData.email,
            password: userData.password,
        })).unwrap().then(res => {
            status.message = "You are logged"
            status.isSuccess = true
            navigation.navigate("Home")
        }).catch(ex => {
            status.isSuccess = false
            status.message = ex

        }).finally(() => {
            status.isLoading = false
        })
    }


    return (
        <View style={styles.loginContainer}>

            <TopHeader title="Back to Home" onAction={()=>navigation.navigate("Home")} />


            <View className="p-4">

                <View className="flex justify-center items-center mt-10 mb-10">
                    <Image source={require("../../assets/login.png")} style={{width: 100, height: 120}}/>
                    <Text className="font-bold text-2xl">Login</Text>
                    <HttpStatus {...status} />
                </View>


                <AppForm
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                    initialValues={{
                        email: "",
                        password: "",
                    }}>
                    <>
                        <AppFormField
                            maxLength={255}
                            icon="email"
                            placeholder="Enter Email"
                            name="email"
                        />
                        <AppFormField
                            maxLength={255}
                            name="password"
                            icon="lock"
                            placeholder="Enter Password"
                        />

                        <FormSubmit style={{paddingVertical: 15, marginTop: 10, borderRadius: 25}} title="Submit"/>
                    </>
                </AppForm>
            </View>


        </View>

    );
};


const styles = StyleSheet.create({
    loginContainer: {
        height: '100%',
        width: '100%',
    },
    loginHeader: {
        backgroundColor: Colors.primary400,
        height: 300,
        color: "#fff",
        alignContent: "center",
        justifyContent: "center",
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    loginBottom: {
        paddingHorizontal: 20,
        height: "100%",

    }
})

export default Login;