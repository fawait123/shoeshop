import { StyleSheet } from "react-native";
import { COLOURS } from "../../database/Database";

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 999,
    width: 40,
    height: 30,
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default style;
