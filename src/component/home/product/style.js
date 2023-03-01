import { StyleSheet } from "react-native";
import { COLOURS } from "../../database/Database";

const style = StyleSheet.create({
  card: {
    position: "relative",
    backgroundColor: COLOURS.backgroundMedium,
    flex: 1,
    height: 110,
    borderRadius: 7,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
  },
  textTitle: {
    fontWeight: "500",
    fontSize: 14,
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  textPrice: {
    fontSize: 14,
    color: COLOURS.backgroundDark,
  },
  overlay: {
    width: 40,
    height: 20,
    backgroundColor: COLOURS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    top: 0,
    position: "absolute",
    left: 0,
  },
  textOverlay: {
    color: COLOURS.white,
    fontWeight: "500",
  },
});

export default style;
