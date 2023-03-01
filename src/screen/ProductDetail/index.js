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
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const addToCart = async (product) => {
  await AsyncStorage.getItem("cart")
    .then(async (cart) => {
      if (cart) {
        let data = JSON.parse(cart);
        console.log(data);
        let check = data.findIndex((el) => el.id === 100);
        if (check >= 0) {
          data[check].qty = data[check].qty + 1;
        } else {
          data.push({
            id: product.id,
            name: product.productName,
            qty: 1,
          });
        }
      } else {
        let data = [
          {
            id: product.id,
            name: product.productName,
            qty: 1,
          },
        ];
        await AsyncStorage.setItem("cart", JSON.stringify(data));
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};
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
        renderItem={({ item }) => <Product item={item} />}
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

      <View
        style={{
          padding: 20,
        }}
      >
        <View style={style.containerHeader}>
          <Feather name="shopping-cart" size={24} color="black" />
          <Text style={style.textHeader}>Shopping</Text>
        </View>
        <View style={style.containerTitle}>
          <Text style={style.textTitle}>{product.productName}</Text>
          <View style={style.containerLink}>
            <Feather name="link" size={24} color={COLOURS.blue} />
          </View>
        </View>
        <Text style={style.textDescription}>{product.description}</Text>
        <View style={style.containerPrice}>
          <Feather
            name="dollar-sign"
            size={16}
            color={COLOURS.backgroundDark}
          />
          <Text
            style={{
              color: COLOURS.backgroundDark,
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            {product.productPrice}
          </Text>
        </View>
        <TouchableOpacity
          style={style.containerButton}
          onPress={() => addToCart(product)}
        >
          <Text style={style.textButton}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
