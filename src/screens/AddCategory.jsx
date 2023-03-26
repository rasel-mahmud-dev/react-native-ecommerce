import React, {useState} from 'react';
import {ActivityIndicator, Pressable, Text, TextInput, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "../components/Button";
import useHttpStatus from "../hooks/useHttpStatus";
import {useDispatch} from "react-redux";
import {addProductAction} from "../store/actions/productAction";
import Colors from "../colors";
import TopHeader from "../components/TopHeader";

const AddCategory = ({navigation}) => {

    const [newCategory, setNewCategory] = useState({
        name: "",
        image: "",
        parentId: "",

    })

    const dispatch = useDispatch()

    function handleChange(name, value) {
        setNewCategory((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const status = useHttpStatus()


    function handleSave(e) {
        status.isLoading = true
        // dispatch(addProductAction(newProduct)).unwrap()
        //     .then(()=>{
        //         status.message = "done"
        //     })
        //     .catch((ex)=>{
        //         status.message = ex
        //         status.isSuccess = false
        //     })
        //     .finally(()=>{
        //         status.isLoading = false
        //     })
    }


    function handleGoHOme() {
        navigation.navigate("Profile")
    }

    return (
        <View className="">
            <TopHeader title="Go Back Profile" onAction={handleGoHOme}/>


            <View className="py-10">

                <Text className="font-semibold text-2xl text-center">Add Category</Text>

                <View className="mt-4">
                    {status.isLoading && <ActivityIndicator size="large" color={Colors.primary400}/>}
                    {status.message && (
                        <Text className="bg-red-100 text-red-700 px-4 py-2 rounded m-10">{status.message}</Text>)}
                </View>

                <View className="mt-4 px-4">

                    <View className="mt-4">
                        <Text className="text-lg font-medium">Name</Text>
                        <TextInput
                            value={newCategory.name}
                            onChangeText={(value) => handleChange("name", value)}
                            className="border border-blue-500/80 py-1 rounded-lg px-2 text-gray-800"
                            placeholder="Enter name"/>
                    </View>


                    <Button onPress={handleSave} style={{marginTop: 10, borderRadius: 12}}>Add</Button>

                </View>

            </View>
        </View>
    );
};

export default AddCategory;