import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { Image } from "react-native";

export default function Product({ item }) {
  return (
    <View style={style.container}>
      <Image source={item} style={style.image} />
    </View>
  );
}
