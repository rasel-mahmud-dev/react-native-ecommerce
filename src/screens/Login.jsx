import {TextInput, View, Text, SafeAreaView, ActivityIndicator, StyleSheet, Image, Dimensions} from "react-native";
import Button from "../components/Button"
import {useState} from "react";
import api from "../apis";
import useHttpStatus from "../../src/hooks/useHttpStatus";
import Colors from "../colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {loginAction} from "../store/actions/authAction";
import {useDispatch} from "react-redux";


// const loginImage = require('../../src/assets/login.png')
//

const Login = ({navigation}) => {

    const screenWidth = Dimensions.get("window").width


    const dispatch = useDispatch()

    const [status, setStatus] = useHttpStatus()

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    function handleChange(name, value) {
        setUserData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleLogin() {
        setStatus(true, "")
        dispatch(loginAction({
            email: userData.email,
            password: userData.password,
        })).unwrap().then(res => {
            navigation.navigate("Home")
        }).catch(ex => {
            setStatus(undefined, ex, false)
        }).finally(() => {
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
                <Text className="text-2xl font-medium text-center text-white">Login</Text>
            </View>


            <View>

                <View className="mt-4 px-4">

                    {status.isLoading && <ActivityIndicator size="small" color="#0000ff"/>}

                    {status.message && (
                        <Text className="bg-red-100 text-red-700 px-4 py-2 rounded m-10">{status.message}</Text>
                    )}

                    <View>
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

                    <View className="flex gap-x-1 items-center flex-row mt-4">
                        <Text>Not Registered ?</Text>
                        <Text onPress={() => navigation.navigate("Register")}>Register Now</Text>
                    </View>

                    <Button onPress={handleLogin} className="mt-10"
                            style={{margin: 20}}> Login Now </Button>
                </View>


            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    loginContainer: {
        height: '100%',
        width: '100%',
    },
    loginHeader: {
        backgroundColor: Colors.primary400,
        height: 300,
        color: "#fff",
        alignContent: "center",
        justifyContent: "center",
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    loginBottom: {
        paddingHorizontal: 20,
        height: "100%",

    }
})

export default Login;