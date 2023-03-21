import {Text, View, Pressable} from "react-native";
import Colors from "../colors";


const Button = (props) => {
    return (
        <Pressable android_ripple={{color: Colors.primary100}} className={`bg-blue-600  py-3 px-5 rounded text-white`} style={{ alignSelf: 'center', ...props.style}} onPress={props.onClick} >
            <Text className="text-white font-semibold">{props.children}</Text>
        </Pressable>
    );
};

export default Button;