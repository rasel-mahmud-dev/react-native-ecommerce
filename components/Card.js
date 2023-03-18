import React from 'react';
import {Text, Pressable, View, Image} from "react-native";

const Card = ({title, desc, className, style = {}}) => {

    return (
        <Pressable className={`rounded-md bg-white shadow border border-gray-100 overflow-hidden ${className}`} style={style}>
            <Image style={{width: "auto", height: 200}} source={{
                uri: 'https://crowdbotics.ghost.io/content/images/2020/08/React-Native-Featured-Image.png',
            }} />
          <View className="p-4">
              <Text className="text-xl text-gray-900">{title}</Text>
              <Text className="text-gray-500">{desc}</Text>
          </View>
        </Pressable>
    );
};

export default Card;