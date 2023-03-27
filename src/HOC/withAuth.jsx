import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

function withAuth(HOC){

    return function (props){

        const navigation = useNavigation()

        const {auth} = useSelector(state=>state.authState)

        useEffect(() => {
            if(!auth){
                navigation.navigate("Login")
            }
        }, [auth]);


        return  auth ? <HOC {...props} /> : null

    }
}

export default withAuth