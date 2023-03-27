import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Pressable, Text, FlatList, Image} from "react-native";
import defaultStyles from "../config/styles";
import {AntDesign, EvilIcons} from "@expo/vector-icons"
import {useNavigation} from '@react-navigation/native';
import apis from "../apis";
import useHttpStatus from "../hooks/useHttpStatus";
import HttpStatus from "../components/HttpStatus";
import fullImagePath from "../utills/fullImagePath";

const SearchProduct = ({onCloseSearchProductModal}) => {

    const navigation = useNavigation()
    const status = useHttpStatus()

    const [searchText, setSearchText] = useState("")

    const [products, setProducts] = useState([])

    async function searchProducts() {
        status.isLoading = true

        try {
            let {data, status} = await apis.post("/api/products/filter", {
                title: searchText,
            })

            if (status === 200) {
                setProducts(data.products)
            }
        } catch (ex) {

        } finally {
            status.isLoading = false
        }
    }

    function closeSearchProductModal() {
        onCloseSearchProductModal()
    }

    function handleSearch() {
        searchProducts()
    }

    return (

        <View style={styles.container}>

            <View className="flex-row items-center justify-between px-4 mt-1">
                <AntDesign onPress={closeSearchProductModal} name="arrowleft" style={styles.leftArrow}/>
                <View style={styles.inputWrapper}>
                    {/*<EvilIcons  style={styles.searchIcon} name="search" />*/}
                    <TextInput onChangeText={(t) => setSearchText(t)} style={styles.input}
                               placeholder="Enter product name"/>
                </View>

                <Pressable onPress={handleSearch}><Text style={styles.searchText}>Search</Text></Pressable>
            </View>


            <HttpStatus {...status} />


            {!status.isLoading && (
                <View className="p-2">

                    <View className="flex items-center flex-row">
                        <Text>Total Product: </Text>
                        <Text>({products.length})</Text>
                    </View>

                    {products.length > 0 ? <FlatList numColumns={3} data={products} renderItem={(({item}) => (
                        <View style={styles.productItem} className="">
                            <View className="w-28 h-28 flex flex-row">
                                <Image className="w-full h-full" resizeMode="contain"
                                       source={{uri: fullImagePath(item.thumb)}}/>
                            </View>
                            <Text className="text-center">{item.title}</Text>
                            <Text className="text-center font-medium text-sm mt-2"
                                  style={{color: defaultStyles.color.primary400}}>Tk.{item.price}</Text>
                        </View>
                    ))}></FlatList> : (
                        <View>
                            <Text className="font-semibold">No product match with {searchText}</Text>
                        </View>
                    )}
                </View>

            )}

        </View>
    );
};

const gap = 8;

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.color.c1,
        flex: 1
    },
    inputWrapper: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderColor: defaultStyles.color.primary400,
        borderWidth: 1,
        paddingVertical: 4,
        backgroundColor: "white",
        marginHorizontal: 8,
        borderRadius: 100,
        paddingHorizontal: 15,
    },
    input: {
        fontSize: 16,
        fontWeight: "400",
        paddingHorizontal: 4
    },
    searchIcon: {
        fontSize: 24,
        color: defaultStyles.color.c100
    },
    leftArrow: {
        fontSize: 20,
        color: defaultStyles.color.c200,
        paddingHorizontal: 5
    },
    searchText: {
        fontSize: 14,
        color: defaultStyles.color.primary400,
    },
    productItemContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        paddingHorizontal: (gap / -2),
        paddingVertical: (gap / -2),
        // width: 100
    },
    productItem: {
        color: defaultStyles.color.c10,
        marginHorizontal: gap / 2,
        marginVertical: gap / 2,
        flex: 1,
        borderColor: defaultStyles.color.c4,
        padding: 4,
        borderRadius: 8,
        borderWidth: 1,
    }
})

export default SearchProduct;