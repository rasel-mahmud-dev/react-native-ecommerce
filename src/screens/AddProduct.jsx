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
import AppFormPicker from "../components/Forms/AppFormPicker";
import AppFormImagePicker from "../components/Forms/AppFormImagePicker";
import {addProductAction} from "../store/actions/productAction";
import {getAllCategories} from "../store/actions/categoryAction";
import {getAllBrandsAction} from "../store/actions/brandAction";



const AddProduct = ({navigation}) => {

    const dispatch = useDispatch()

    const {categories, brands} = useSelector(state=>state.productState)

    const status = useHttpStatus()

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(4).max(300).label("Title"),
        category: Yup.object().required().nullable().label("Category"),
        brand: Yup.object().required().nullable().label("Brand"),
        thumb: Yup.string().required().label("Thumb"),
        images: Yup.array().label("Images"),
        price: Yup.number().required().min(0).label("Price"),
        stock: Yup.number().required().min(1).label("Stock"),
    })

    function handleSave(values) {
        const { title, price, stock, thumb, category, brand, images } = values

        let filename = thumb.split('/').pop();
        let formDate = new FormData()

        formDate.append("thumb", {uri: thumb,  type : 'image/jpeg', name: filename})
        formDate.append("title", title, filename)

        formDate.append("stock", stock)
        formDate.append("price", price)

        if(images && Array.isArray(images)){
            images.forEach(img=>{
                let name = thumb.split('/').pop();
                formDate.append("images", {uri: img,  type : 'image/jpeg', name: name})
            })
        }

        if(category){
            formDate.append("category", category?._id)
        }
        if(brand){
            formDate.append("brand", brand?._id)
        }

        status.isLoading = true
        dispatch(addProductAction(formDate)).unwrap()
            .then(() => {
                status.message = "done"
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

                <Text className="font-semibold text-xl text-center">Add Product</Text>


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
                        title: "",
                        price: "",
                        stock: "",
                        category: null,
                        thumb: "",
                        images: [],
                        description: ""
                    }}>
                        <>
                            <AppFormField
                                maxLength={255}
                                icon="cube"
                                placeholder="Title"
                                name="title"
                            />

                            <AppFormPicker
                                data={categories}
                                labelKeyName="name"
                                name="category"
                                onPress={()=>dispatch(getAllCategories())}
                                icon="apps"
                                placeholder="Category"
                            />
                            <AppFormPicker
                                data={brands}
                                labelKeyName="name"
                                onPress={()=>dispatch(getAllBrandsAction())}
                                name="brand"
                                icon="library"
                                placeholder="Brand"
                            />

                            <AppFormField
                                icon="currency-usd"
                                keyboardType="numeric"
                                placeholder="Price"
                                maxLength={8}
                                name="price"
                            />

                            <AppFormField
                                icon="bookmark"
                                placeholder="Stock"
                                keyboardType="numeric"
                                maxLength={3}
                                name="stock"
                            />

                            <AppFormField
                                icon="cube"
                                placeholder="description"
                                numberOfLines={3}
                                maxLength={500}
                                multiline={true}
                                name="description"
                            />

                            <AppFormImagePicker
                                icon="cube"
                                placeholder="Choose Thumb"
                                name="thumb"
                            />

                            <AppFormImagePicker
                                icon="cube"
                                multiple={true}
                                placeholder="Choose Images"
                                name="images"
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

export default AddProduct;