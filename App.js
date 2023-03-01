import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screen/Home";
import MyCartScreen from "./src/screen/MyCart";
import ProductDetailScreen from "./src/screen/ProductDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="myCart" component={MyCartScreen} />
      </Stack.Navigator>
      <StatusBar translucent />
    </NavigationContainer>
  );
}
