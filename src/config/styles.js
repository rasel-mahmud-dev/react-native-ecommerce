import Colors from "../colors";
import {Platform} from "react-native";


const defaultStyles = {
    color: Colors,
    text: {
        color: Colors.c900,
        fontSize: 16,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
}
export default defaultStyles