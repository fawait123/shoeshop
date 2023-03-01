import { View, Text } from "react-native";
import React from "react";
import style from "./style";

export default function HeaderComponent() {
  return (
    <View style={style.containerText}>
      <Text style={style.textTitle}>Hi-Fi Shop & Service</Text>
      <Text style={style.textSubTitle}>Audio Shop on Rustaveli Ave 57</Text>
      <Text style={style.textSubTitle}>
        This Shop offers bot products and services
      </Text>
    </View>
  );
}
