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


const AppPicker = ({icon, data, onSelectItem, selectedItem, labelKeyName = "name", placeholder}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const [selectedValue, setSelectedValue] = useState({})


    function handleSelectItem(item) {
        onSelectItem(item)
        setModalVisible(false)
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        size={18} style={{marginRight: 5, color: defaultStyles.color.c300}}
                        name={icon} />}
                    <Text
                        style={{...defaultStyles.text, ...styles.label}}>{selectedItem ? selectedItem[labelKeyName] : placeholder}</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType={"slide"}>
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
    },
    listItem: {
        padding: 10,
        backgroundColor: defaultStyles.color.c4,
        borderRadius: 10,
        marginVertical: 4,

    }
})

export default AppPicker;