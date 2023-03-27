import React, {useState} from 'react';
import {ActivityIndicator, Dimensions, Image, ScrollView, StatusBar, Text, TextInput, View} from "react-native";
import useHttpStatus from "../hooks/useHttpStatus";
import {useDispatch} from "react-redux";
import Colors from "../colors";
import TopHeader from "../components/TopHeader";
import * as Yup from "yup"
import AppForm from "../components/Forms/AppForm";
import FormSubmit from "../components/Forms/FormSubmit";
import AppFormField from "../components/Forms/AppFormField";

import AppFormImagePicker from "../components/Forms/AppFormImagePicker";
import {addBrandAction} from "../store/actions/brandAction";


const AddCategory = ({navigation}) => {

    const dispatch = useDispatch()

    const status = useHttpStatus()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(2).max(300).label("Name"),
        image: Yup.string().required().label("Image"),
    })

    function handleSave(values) {
        const { name, image } = values

        let filename = image.split('/').pop();
        let formDate = new FormData()

        formDate.append("image", {uri: image,  type : 'image/jpeg', name: filename})
        formDate.append("name", name)

        status.isLoading = true
        dispatch(addBrandAction(formDate)).unwrap()
            .then(() => {
                status.message = "Done"
                navigation.navigate("Profile")
            })
            .catch((ex) => {
                status.message = ex
                status.isSuccess = false
            })
            .finally(() => {
                status.isLoading = false
            })
    }



    return (
        <View className="">
            <TopHeader title="Back Profile" onAction={() => navigation.navigate("Profile")}/>

            <ScrollView className="px-4 py-4" >

                <View className="flex flex-row justify-center">
                    <Image source={require("../../assets/product-return.png")} style={{width: 70, height: 70}}/>
                </View>

                <Text className="font-semibold text-xl text-center">Add Brand</Text>


                <View className="mt-4">
                    {status.isLoading && <ActivityIndicator size="large" color={Colors.primary400}/>}
                    {status.message && (
                        <Text className="bg-red-100 text-red-700 px-4 py-2 rounded m-10">{status.message}</Text>)}
                </View>

                <View>
                    <AppForm
                        validationSchema={validationSchema}
                        onSubmit={handleSave}
                        initialValues={{
                            name: "",
                            image: "",
                        }}>
                        <>
                            <AppFormField
                                maxLength={255}
                                icon="cube"
                                placeholder="Name"
                                name="name"
                            />

                            <AppFormImagePicker
                                icon="cube"
                                placeholder="Choose Image"
                                name="image"
                            />

                            <FormSubmit style={{
                                marginTop: 10,
                                paddingVertical: 14,
                                borderRadius: 100,
                                justifyContent: "center"
                            }} title="Add"/>

                        </>

                        {/*<ImageInputList imageUris={} onAddImage={} onRemoveImage={} />*/}

                    </AppForm>
                </View>

                <View style={{height: 60}}></View>

            </ScrollView>

        </View>
    );
};

export default AddCategory;