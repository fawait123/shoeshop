import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { COLOURS } from "../../database/Database";

const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    backgroundColor: COLOURS.backgroundMedium,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default style;
