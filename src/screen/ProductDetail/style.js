import { StyleSheet } from "react-native";
import { COLOURS } from "../../component/database/Database";

const style = StyleSheet.create({
  container: {
    position: "relative",
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 16,
    marginLeft: 20,
  },
  containerLink: {
    backgroundColor: COLOURS.backgroundMedium,
    width: 40,
    padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  textDescription: {
    letterSpacing: 1,
    color: COLOURS.backgroundMedium,
    marginVertical: 10,
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerButton: {
    backgroundColor: COLOURS.blue,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 40,
  },
  textButton: {
    color: COLOURS.white,
    fontWeight: "500",
  },
});

export default style;
