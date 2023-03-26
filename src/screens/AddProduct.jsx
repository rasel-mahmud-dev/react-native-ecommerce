import React, {useState} from 'react';
import {ActivityIndicator, Text, TextInput, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "../components/Button";
import useHttpStatus from "../hooks/useHttpStatus";
import {useDispatch} from "react-redux";
import {addProductAction} from "../store/actions/productAction";
import Colors from "../colors";

const AddProduct = () => {

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: 0,
        stock: 1,

    })

    const dispatch = useDispatch()

    function handleChange(name, value) {
        setNewProduct((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const status = useHttpStatus()


    function handleSave(e) {
        status.isLoading = true
        dispatch(addProductAction(newProduct)).unwrap()
            .then(()=>{
                status.message = "done"
            })
            .catch((ex)=>{
                status.message = ex
                status.isSuccess = false
            })
            .finally(()=>{
                status.isLoading = false
            })
    }


    return (
        <View className="py-10">

            <Text className="font-semibold text-2xl text-center">Add Product</Text>

            <View className="mt-4">
                {status.isLoading && <ActivityIndicator size="large" color={Colors.primary400}/>}
                {status.message && (
                    <Text className="bg-red-100 text-red-700 px-4 py-2 rounded m-10">{status.message}</Text>)}
            </View>

            <View className="mt-4 px-4">

                <View className="mt-4">
                    <Text className="text-lg font-medium">Title</Text>
                    <TextInput
                        value={newProduct.title}
                        onChangeText={(value) => handleChange("title", value)}
                        className="border border-blue-500/80 py-1 rounded-lg px-2 text-gray-800"
                        placeholder="Enter title"/>
                </View>

                <View className="mt-4">
                    <Text className="text-lg font-medium">Price</Text>
                    <TextInput
                        value={newProduct.price}
                        onChangeText={(value) => handleChange("price", value)}
                        className="border border-blue-500/80 py-1 rounded-lg px-2 text-gray-800"
                        placeholder="Enter price"/>
                </View>


                <View className="mt-4">
                    <Text className="text-lg font-medium">Stock</Text>
                    <TextInput
                        value={newProduct.stock}
                        onChangeText={(value) => handleChange("stock", value)}
                        className="border border-blue-500/80 py-1 rounded-lg px-2 text-gray-800"
                        placeholder="Number of stock"/>
                </View>


                <Button onPress={handleSave} style={{marginTop: 10, borderRadius: 12}}>Add</Button>

            </View>

        </View>
    );
};

export default AddProduct;