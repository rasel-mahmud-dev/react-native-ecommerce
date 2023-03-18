import {Text, View, TouchableOpacity} from "react-native";


const Button = ({title}) => {
    return (
        <TouchableOpacity className="bg-blue-600 py-3 px-5 rounded-md" style={{ alignSelf: 'center'}} >
            <Text className="text-white">{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;