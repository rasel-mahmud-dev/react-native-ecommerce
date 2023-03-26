import {Text, View, Pressable, StyleSheet} from "react-native";
import Colors from "../colors";


const Button = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            <View android_ripple={{color: Colors.primary100}}
                  className={`text-white ${props.className}`}
                  style={{...styles.btn, ...props.style}}>
                <Text className="text-white font-semibold">{props.children}</Text>
            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    btn: {
        borderRadius: 12,
        backgroundColor: Colors.primary400,
        shadowColor: Colors.primary600,
        shadowOpacity: 1,
        paddingHorizontal: 39,
        paddingVertical: 10,
        alignSelf: "flex-start",
        shadowOffset: 100,
        shadowRadius: 100
    }
})

export default Button;