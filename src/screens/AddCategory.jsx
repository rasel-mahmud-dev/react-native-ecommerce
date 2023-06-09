import React, {useState} from 'react';
import {ActivityIndicator, Dimensions, Image, ScrollView, StatusBar, Text, TextInput, View} from "react-native";
import useHttpStatus from "../hooks/useHttpStatus";
import {useDispatch, useSelector} from "react-redux";
import Colors from "../colors";
import TopHeader from "../components/TopHeader";
import * as Yup from "yup"
import AppForm from "../components/Forms/AppForm";
import FormSubmit from "../components/Forms/FormSubmit";
import AppFormField from "../components/Forms/AppFormField";

import AppFormImagePicker from "../components/Forms/AppFormImagePicker";
import {addCategoryAction} from "../store/actions/categoryAction";
import AppFormPicker from "../components/Forms/AppFormPicker";


const AddCategory = ({navigation}) => {

    const {brands} = useSelector(state=>state.productState)

    const dispatch = useDispatch()

    const status = useHttpStatus()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(2).max(300).label("Name"),
        description: Yup.string().max(300).label("Description"),
        image: Yup.string().label("Image"),
        brandIds: Yup.array().label("BrandIDS"),
        parentId: Yup.string().label("ParentId"),
    })

    function handleSave(values ) {
        const { name, description, parentId = null, brandIds = [], image } = values

        let filename = image.split('/').pop();

        let formData = new FormData()

        let brandsIds = ""
        try{
            if(brandIds && Array.isArray(brandIds)) {
                brandsIds = JSON.stringify(brandIds.map(brand => brand._id))
            }
        } catch (ex){

         }

        formData.append("image", {uri: image,  type : 'image/jpeg', name: filename})
        formData.append("name", name)
        formData.append("description", description)
        formData.append("brandIds", brandsIds)
        formData.append("parentId", parentId)

        status.isLoading = true
        status.message = ""
        dispatch(addCategoryAction(formData)).unwrap()
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

                <Text className="font-semibold text-xl text-center">Add Category</Text>


                <View className="mt-4">
                    {status.isLoading && <ActivityIndicator size="large" color={Colors.primary400}/>}
                    {status.message && (
                        <Text className="bg-red-100 text-red-700 p-4 mb-4 rounded">{status.message}</Text>)}
                </View>

                <View>
                    <AppForm
                        validationSchema={validationSchema}
                        onSubmit={handleSave}
                        initialValues={{
                            name: "",
                            image: "",
                            brands: []
                        }}>
                        <>
                            <AppFormField
                                maxLength={255}
                                icon="cube"
                                placeholder="Name"
                                name="name"
                            />


                            <AppFormPicker
                                data={brands}
                                multiple={true}
                                labelKeyName="name"
                                name="brandIds"
                                icon="apps"
                                placeholder="Brand Ids"
                            />

                            <AppFormField
                                maxLength={255}
                                icon="cube"
                                multiline
                                numberOfLines={3}
                                placeholder="Description"
                                name="description"
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