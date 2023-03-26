import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Pressable} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import fullImagePath from "../utills/fullImagePath";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {getAllCategories, getAllProductAction} from "../store/actions/productAction";
import Colors from "../colors";
import {clearProducts} from "../store/slices/productSlice"
import ImageInput from "../components/Images/ImageInput";
import ImageInputList from "../components/Images/ImageInputList";

const Home = ({navigation}) => {

    const {products, categories} = useSelector(state => state.productState)


    const dispatch = useDispatch()

    const [refreshing, setRefreshing] = useState(false)


    useEffect(() => {

        dispatch(getAllProductAction())
        dispatch(getAllCategories())

        return () => {

        };
    }, []);

    function handleGoDetail(item) {

    }

    function handleRefresh(data){
        dispatch(clearProducts())
        dispatch(getAllProductAction())
    }

    const [imageUris, setImageUris] = useState([])


    function handleAddImage(uri){
        setImageUris([...imageUris, uri])
    }
    function handleRemoveImage(uri){
        setImageUris(imageUris.filter(imageUri=>imageUri !== uri))
    }

    return (
        <View>

            {/*<Button onPress={()=>navigation.navigate("Profile")}>Profile</Button>*/}
            {/*<Button onPress={()=>navigation.navigate("Add-Product")}>Add</Button>*/}

            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAddImage}
                onRemoveImage={handleRemoveImage}
            />

            <View className="my-4">

                {/*<Text style={{color: Colors.c900}} className="font-medium text-xl px-4">Products*/}
                {/*    ({products.length})*/}
                {/*</Text>*/}



                <View className="mx-2">


                {/*<View>*/}
                {/*    {categories?.map((category)=>(*/}
                {/*        <View>*/}
                {/*            <Text>{category.name}</Text>*/}
                {/*        </View>*/}
                {/*    ))}*/}
                {/*</View>*/}



                    {/*<FlatList renderItem={({item, index}) => (*/}
                    {/*    <View style={styles.grid}*/}
                    {/*          key={index}>*/}
                    {/*        <Pressable style={styles.btn} android_ripple={{color: Colors.primary100}} onPress={handleGoDetail}>*/}
                    {/*            <View className="flex-1">*/}
                    {/*                <Image style={{width: 100, height: 100}}  source={{*/}
                    {/*                    uri: fullImagePath(item.image)*/}
                    {/*                }}/>*/}
                    {/*            </View>*/}

                    {/*            <View className="mt-2">*/}
                    {/*                <Text style={{color: Colors.c800}}>{item.title}</Text>*/}
                    {/*                <Text style={{color: Colors.c800}}>Tk.{item.price}</Text>*/}
                    {/*            </View>*/}
                    {/*        </Pressable>*/}
                    {/*    </View>*/}
                    {/*)}*/}
                    {/*          data={products}*/}
                    {/*          numColumns={2}*/}
                    {/*          refreshing={refreshing}*/}
                    {/*          onRefresh={handleRefresh}*/}
                    {/*>*/}

                    {/*</FlatList>*/}

                </View>


            </View>



        </View>
    );
};


const styles = StyleSheet.create({
    grid: {
        elevation: 4,
        shadowColor: Colors.c700,
        shadowOpacity: 0.25,
        shadowRadius: 200,
        borderRadius: 10,
        flex: 1,
        height: 180,
        backgroundColor: "white",
        margin: 10,
        overflow: "hidden"

        // shadowOffset: {width: 0, height: 100}
    },
    btn:{
        flex: 1,
        padding: 16,


    }
})


export default Home;