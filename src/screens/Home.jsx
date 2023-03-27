import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Pressable, Modal} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { getAllProductAction} from "../store/actions/productAction";
import Colors from "../colors";
import {clearProducts} from "../store/slices/productSlice"
import ImageInput from "../components/Images/ImageInput";
import ImageInputList from "../components/Images/ImageInputList";
import {getAllBrandsAction} from "../store/actions/brandAction";
import {getAllCategories} from "../store/actions/categoryAction";
import fullImagePath from "../utills/fullImagePath";
import Header from "../components/Header";
import HeaderCategoryView from "../components/HeaderCategoryView";
import SearchProduct from "./SearchProduct";

const Home = ({navigation}) => {

    const {products, categories} = useSelector(state => state.productState)


    const dispatch = useDispatch()

    const [refreshing, setRefreshing] = useState(false)
    const [isOpenSearchProduct, setOpenSearchProduct] = useState(false)


    useEffect(() => {
        dispatch(getAllProductAction())

        dispatch(getAllCategories())
        dispatch(getAllBrandsAction())

        return () => {

        };
    }, []);

    function handleGoDetail(item) {

    }

    function handleRefresh(data){
        dispatch(clearProducts())
        dispatch(getAllProductAction())
        dispatch(getAllCategories())
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

            {/*<ImageInputList*/}
            {/*    imageUris={imageUris}*/}
            {/*    onAddImage={handleAddImage}*/}
            {/*    onRemoveImage={handleRemoveImage}*/}
            {/*/>*/}

            <Header onOpenSearchProductModal={()=>setOpenSearchProduct(true)} />

            <View className="my-4">

                {/*<Text style={{color: Colors.c900}} className="font-medium text-xl px-4">Products*/}
                {/*    ({products.length})*/}
                {/*</Text>*/}

                <View className="mx-2">


                    <HeaderCategoryView categories={categories} />


                    <FlatList renderItem={({item, index}) => (
                        <View style={styles.grid}
                              key={index}>
                            <Pressable style={styles.btn} android_ripple={{color: Colors.primary100}} onPress={handleGoDetail}>
                                <View className="flex-1">
                                    <Image  resizeMode="contain"  style={styles.gridImage}  source={{
                                        uri: fullImagePath(item.thumb)
                                    }}/>
                                </View>

                                <View className="mt-2">
                                    <Text style={{color: Colors.c800}}>{item.title}</Text>
                                    <Text style={{color: Colors.c800}}>Tk.{item.price}</Text>
                                </View>
                            </Pressable>
                        </View>
                    )}
                              data={products}
                              numColumns={3}
                              refreshing={refreshing}
                              onRefresh={handleRefresh}
                    >

                    </FlatList>

                </View>

            </View>

            <Modal animationType="slide"  visible={isOpenSearchProduct}>
                <SearchProduct onCloseSearchProductModal={()=>setOpenSearchProduct(false)} />
            </Modal>



        </View>
    );
};


const styles = StyleSheet.create({
    grid: {
        elevation: 4,
        shadowColor: Colors.c10,
        shadowOpacity: 0.5,
        borderRadius: 10,
        flex: 1,
        // width: "100%",
        height: 160,
        backgroundColor: "white",
        margin: 10,
        overflow: "hidden"
    },
    btn:{
        flex: 1,
        padding: 10
    },
    gridImage:{
        width: "100%",
        height:  "100%",
    }
})


export default Home