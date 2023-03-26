import React, {useState} from 'react';
import {ActivityIndicator, Text, TextInput, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "../components/Button";
import useHttpStatus from "../hooks/useHttpStatus";
import {useDispatch} from "react-redux";
import {addProductAction} from "../store/actions/productAction";
import Colors from "../colors";
import TopHeader from "../components/TopHeader";
import AppPicker from "../components/AppPicker";
import {Formik} from "formik";
import AppTextInput from "../components/AppTextInput";
import ImageInputList from "../components/Images/ImageInputList";
import * as Yup from "yup"
import AppForm from "../components/Forms/AppForm";
import FormSubmit from "../components/Forms/FormSubmit";
import AppFormField from "../components/Forms/AppFormField";
import AppFormPicker from "../components/Forms/AppFormPicker";

const AddProduct = ({navigation}) => {

    const dispatch = useDispatch()

    const status = useHttpStatus()

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(10).max(300).label("Title"),
        category: Yup.object().required().nullable().label("Category"),
        price: Yup.number().required().min(0).label("Price"),
        stock: Yup.number().required().min(1).label("Stock"),
    })

    function handleSave(e) {
        console.log(e)
        // status.isLoading = true
        // dispatch(addProductAction(newProduct)).unwrap()
        //     .then(() => {
        //         status.message = "done"
        //     })
        //     .catch((ex) => {
        //         status.message = ex
        //         status.isSuccess = false
        //     })
        //     .finally(() => {
        //         status.isLoading = false
        //     })
    }

    const [category, setCategory] = useState(null)

    const [categories, setCategories] = useState([
        {name: "Clothes", id: '234'},
        {name: "Electronics", id: '234'},
        {name: "Toys", id: '234'},
        {name: "Clothes", id: '234'},
        {name: "Electronics", id: '234'},
        {name: "Toys", id: '234'},
        {name: "Clothes", id: '234'},
        {name: "Electronics", id: '234'},
        {name: "Toys", id: '234'},
        {name: "Clothes", id: '234'},
        {name: "Electronics", id: '234'},
        {name: "Toys", id: '234'},
        {name: "Clothes", id: '234'},
        {name: "Electronics", id: '234'},
        {name: "Toys", id: '234'},
    ])


    return (
        <View className="">
            <TopHeader title="Back Profile" onAction={() => navigation.navigate("Profile")}/>
            <View className="py-6">

                <Text className="font-semibold text-2xl text-center">Add Product</Text>

                <View className="mt-4">
                    {status.isLoading && <ActivityIndicator size="large" color={Colors.primary400}/>}
                    {status.message && (
                        <Text className="bg-red-100 text-red-700 px-4 py-2 rounded m-10">{status.message}</Text>)}
                </View>

                <View className="mt-4 px-4">

                    <AppForm validationSchema={validationSchema} onSubmit={handleSave} initialValues={{
                        title: "",
                        price: 0,
                        stock: 0,
                        category: null
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
                                icon="apps"
                                placeholder="Category"
                            />

                            <AppFormField
                                icon="cube"
                                keyboardType="numeric"
                                placeholder="Price"
                                name="price"
                            />

                            <AppFormField
                                icon="cube"
                                placeholder="Stock"
                                keyboardType="numeric"
                                name="stock"
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

            </View>
        </View>
    );
};

export default AddProduct;