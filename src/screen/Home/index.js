import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import { Feather } from "@expo/vector-icons";
import { COLOURS, Items } from "../../component/database/Database";
import HeaderComponent from "../../component/home/header";
import ProductComponent from "../../component/home/product";

export default function HomeScreen() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerIcon}>
        <Feather name="archive" color={COLOURS.backgroundDark} size={30} />
        <Feather
          name="shopping-cart"
          size={30}
          color={COLOURS.backgroundDark}
        />
      </View>
      <HeaderComponent />
      <FlatList
        keyExtractor={(item) => item.id}
        data={Items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductComponent item={item} />}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
