import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../../component/button";
import { COLOURS, Items } from "../../component/database/Database";
import { FlatList } from "react-native";
import Product from "../../component/product/single";
import { Dimensions } from "react-native";
import Overlay from "../../component/product/overlay";
import style from "./style";
import { Animated } from "react-native";

export default function ProductDetailScreen({ route }) {
  let id = route.params.productID;

  let product = Items.find((el) => el.id === id);

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, Dimensions.get("window").width);
  return (
    <SafeAreaView style={style.container}>
      <Overlay />
      <FlatList
        horizontal
        data={product.productImageList}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Product key={item.id} item={item} />}
        decelerationRate={0.8}
        snapToInterval={Dimensions.get("window").width}
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          top: -30,
        }}
      >
        {product.productImageList.length > 0 ? (
          product.productImageList.map((el, index) => {
            let opactity = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.2, 1, 0.2],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: COLOURS.white,
                  opacity: opactity,
                  marginHorizontal: 4,
                  borderRadius: 100,
                }}
              ></Animated.View>
            );
          })
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
}
