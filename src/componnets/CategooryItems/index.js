import React from "react";
import { View,Text } from "react-native";
import style from "./style";

const CategoryItems = ({name}) => {
  return (
    <View style={style.container}>
      <Text style={style.textcontainer}>{name}</Text>
    </View>
  );
};

export default CategoryItems;
