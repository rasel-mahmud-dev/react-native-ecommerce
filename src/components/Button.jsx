import {Text, View, Pressable, StyleSheet} from "react-native";
import Colors from "../colors";
import defaultStyles from "../config/styles";


const Button = (props) => {
    return (

        <Pressable onPress={props.onPress} android_ripple={{color: Colors.primary100}}
           className={`text-white ${props.className}`}
           style={{...styles.btn, ...props.style}}>
            <Text style={styles.text}>{props.children}</Text>
        </Pressable>

    );
};


const styles = StyleSheet.create({
    btn: {
        borderRadius: 12,
        backgroundColor: Colors.primary400,
        shadowColor: Colors.primary600,
        shadowOpacity: 1,
        paddingHorizontal: 18,
        paddingVertical: 10,
        shadowOffset: 100,
        shadowRadius: 100,
        elevation: 5,
        overflow: "hidden"
    },
    text:{
        textAlign: "center",
        color: defaultStyles.color.c0,
        fontWeight: "700"
    }
})

export default Button;