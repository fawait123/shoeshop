import { StyleSheet } from "react-native";
import { COLOURS } from "../../component/database/Database";

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerText: {
    marginVertical: 20,
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 6,
  },
  textSubTitle: {
    fontSize: 14,
    color: COLOURS.backgroundDark,
    letterSpacing: 1,
  },
});

export default style;
