import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.2,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:10,
    },
  textcontainer: {
    fontSize: 9,
    fontWeight:"bold"
  },
  image: {
    width: 35,
    height: 35,
  },
  imagecontainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default style;
