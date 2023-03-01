import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import style from "./style";
import { useNavigation } from "@react-navigation/native";

export default function ButtonComponent() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.providerButton}
      onPress={() => navigation.goBack()}
    >
      <Feather name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
  );
}
