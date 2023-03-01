import { View, Text, Image } from "react-native";
import React from "react";
import style from "./style";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLOURS } from "../../database/Database";
import { useNavigation } from "@react-navigation/native";

export default function ProductComponent({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        navigation.navigate("productDetail", { productID: item.id });
      }}
    >
      <View style={style.card}>
        <Image source={item.productImage} style={style.image} />
        {item.offPercentage ? (
          <View style={style.overlay}>
            <Text style={style.textOverlay}>{item.offPercentage}</Text>
          </View>
        ) : (
          <></>
        )}
      </View>
      <Text style={style.textTitle}>{item.productName}</Text>
      <View style={style.containerPrice}>
        <Feather name="dollar-sign" size={14} color={COLOURS.backgroundDark} />
        <Text style={style.textPrice}>{item.productPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}
