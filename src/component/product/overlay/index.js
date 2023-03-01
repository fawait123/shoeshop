import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { Feather } from "@expo/vector-icons";
import { COLOURS } from "../../database/Database";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Overlay() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color={COLOURS.black} />
      </TouchableOpacity>
    </View>
  );
}
