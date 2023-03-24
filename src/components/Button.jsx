import {Text, View, Pressable, StyleSheet} from "react-native";
import Colors from "../colors";


const Button = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            <View android_ripple={{color: Colors.primary100}}
                  className={`py-3 px-5  text-white ${props.className}`}
                  style={styles.btn}>
                <Text className="text-white font-semibold">{props.children}</Text>
            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    btn: {
        borderRadius: 100,
        backgroundColor: Colors.primary400,
        shadowColor: Colors.primary600,
        shadowOpacity: 1,
        shadowOffset: 100,
        shadowRadius: 100
    }
})

export default Button;