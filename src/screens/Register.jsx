import {TextInput, View, Text, SafeAreaView, ActivityIndicator, StyleSheet, Image, Dimensions} from "react-native";
import Button from "../components/Button"
import {useState} from "react";
import api from "../apis";
import useHttpStatus from "../../src/hooks/useHttpStatus";
import Colors from "../colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useDispatch} from "react-redux";
import {registrationAction} from "../store/actions/authAction";


// const loginImage = require('../../src/assets/login.png')
//

const Register = ({navigation}) => {

    const screenWidth = Dimensions.get("window").width

    const [status, setStatus] = useHttpStatus()

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    function handleChange(name, value) {
        setUserData((prev) => ({
            ...prev, [name]: value
        }))
    }

    async function handleRegister() {
        setStatus(true, "")
        dispatch(registrationAction({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
        })).unwrap()
            .then(() => {
                setStatus(undefined, "success", false)
            }).catch(ex => {
            setStatus(undefined, ex, false)
        })
            .finally(() => {
                setStatus(false)
            })
    }


    // "platforms;android-31" "system-images;android-31;google_apis_playstore;x86_64" "build-tools;31.0.2"

    return (
        <View style={styles.loginContainer}>

            <View style={styles.loginHeader}>
                <View className="flex justify-center items-center">
                    <FontAwesome name="lock" size={102} color="white" className=""/>
                </View>
                <Text className="text-2xl font-medium text-center text-white">Registration</Text>
            </View>


            <View style={styles.loginBottom}>
                {status.isLoading && <ActivityIndicator size="small" color="#0000ff"/>}

                {status.message && (
                    <Text className="bg-red-100 text-red-700 px-4 py-2 rounded m-10">{status.message}</Text>)}
            </View>

            <View className="mt-4 px-4">

                <View className="mt-4">
                    <Text className="text-lg font-medium">First Name</Text>
                    <TextInput
                        value={userData.firstName}
                        onChangeText={(value) => handleChange("firstName", value)}
                        className="border border-blue-500/80 py-1 rounded px-2 text-gray-800"
                        placeholder="Enter FirstName"/>

                </View>

                <View className="mt-4">
                    <Text className="text-lg font-medium">Last Name</Text>
                    <TextInput
                        value={userData.lastName}
                        onChangeText={(value) => handleChange("lastName", value)}
                        className="border border-blue-500/80 py-1 rounded px-2 text-gray-800"
                        placeholder="Enter lastName"/>

                </View>


                <View className="">
                    <Text className="text-lg font-medium">Email</Text>
                    <TextInput
                        autoComplete="email"
                        editable={true}
                        value={userData.email}
                        onChangeText={(value) => handleChange("email", value)}
                        className="border border-blue-500/80 py-1 rounded px-2 text-gray-800"
                        placeholder="Enter Email"/>
                </View>

                <View className="mt-4">
                    <Text className="text-lg font-medium">Password</Text>
                    <TextInput
                        value={userData.password}
                        onChangeText={(value) => handleChange("password", value)}
                        className="border border-blue-500/80 py-1 rounded px-2 text-gray-800"
                        placeholder="Enter Password"/>

                </View>

                <View className="flex items-center gap-x-2 flex-row">
                    <Text>Already have an Account ?</Text>
                    <Text onPress={() => navigation.navigate("Login")}>Login</Text>
                </View>

                <Button onPress={handleRegister} style={{margin: 20}}> Login Now </Button>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    loginContainer: {
        height: '100%', width: '100%',
    },
    loginHeader: {
        backgroundColor: Colors.primary400,
        height: 300,
        color: "#fff",
        alignContent: "center",
        justifyContent: "center",
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    }, loginBottom: {
        paddingHorizontal: 20,
    }
})

export default Register;