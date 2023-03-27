import React, {useState} from 'react';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TextInputComponent,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import {Screen} from "react-native-screens";
import Button from "./Button";


const AppPicker = ({icon, data, multiple = false, onSelectItem, selectedItem, labelKeyName = "name", placeholder, onPress}) => {

    const [modalVisible, setModalVisible] = useState(false)

    function handleSelectItem(item) {
        onSelectItem(item)
        setModalVisible(false)
    }

    function handleOpenOption(){
        setModalVisible(true);
        onPress && onPress()
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={handleOpenOption}>
                <View style={styles.container}>
                    <View className="flex flex-row items-center">
                        {icon && <MaterialCommunityIcons
                            size={18} style={{marginRight: 5, color: defaultStyles.color.c300}}
                            name={icon}/>}
                        <Text
                            style={{...defaultStyles.text, ...styles.label}}>{

                            selectedItem
                                ? multiple
                                    ? (
                                        selectedItem.length > 0 && selectedItem.map(item => item[labelKeyName] + ", ")
                                    ) : selectedItem[labelKeyName]

                                : placeholder

                        }</Text>
                    </View>

                    <MaterialCommunityIcons
                        size={18}
                        style={{color: defaultStyles.color.c300}}
                        name={modalVisible ? "chevron-up" : "chevron-down"}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType={"slide"} style={styles.modal}>
                <Screen style={styles.modalContainer}>
                    <Button onPress={() => setModalVisible(false)}>
                        Close
                    </Button>

                    <FlatList data={data} renderItem={(({item, index}) => (
                        <TouchableOpacity
                            onPress={() => handleSelectItem(item)}
                            android_ripple={{color: defaultStyles.color.primary400}}
                            style={styles.listItem}>
                            <Text>{item[labelKeyName]}</Text>
                        </TouchableOpacity>
                    ))}></FlatList>

                </Screen>
            </Modal>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.color.c1,
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        padding: 15,
        marginVertical: 10
    },

    label: {
        color: defaultStyles.color.c100,
    },
    modalContainer: {
        padding: 10,
        // backgroundColor: "red",
        width: "100%",
        // bottom: 0,
        // position: "absolute"
    },
    modal: {
        // height: 400,
        // backgroundColor: "red",
        // width: 200,
    },
    listItem: {
        padding: 10,
        backgroundColor: defaultStyles.color.c4,
        borderRadius: 10,
        marginVertical: 4,

    }
})

export default AppPicker;