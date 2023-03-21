import {TextInput, View, Text, SafeAreaView, ActivityIndicator, Dimensions} from "react-native";
import Button from "../components/Button"
import {useState} from "react";



const Login = () => {


    const screenWidth = Dimensions.get("window").width
    console.log(screenWidth)


    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');

    function handleLogin(){
        console.log("sjkdhfjdsh")
    }

    return (
        <SafeAreaView>
            <View className="p-4">

                <Text className="text-4xl font-semibold text-center">Login</Text>

                {/*<ActivityIndicator size="small" color="#0000ff" />*/}



                <View>
                    <Text className="text-lg font-medium">Email</Text>
                    <TextInput
                        autoComplete="email"
                        editable={true}
                        value={text}
                        onChangeText={onChangeText}
                        className="border border-blue-500/80 py-1 rounded px-2 text-gray-800"
                               placeholder="Enter Email"/>
                </View>
                <View className="mt-4">
                    <Text className="text-lg font-medium">Password</Text>
                    <TextInput className="border border-blue-500/80 py-1 rounded px-2 text-gray-800"
                               placeholder="Enter Password"/>
                </View>

                <Button onPress={handleLogin} style={{margin: 20}} > Login Now </Button>

            </View>
        </SafeAreaView>
    );
};

export default Login;