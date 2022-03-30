import React from "react";
import { View, TextInput } from "react-native";
import {FontAwesome} from "@expo/vector-icons"
import style from "./style";
const Search = () => {
  return (
    <View style={style.container}>
    <FontAwesome name="search" size={25} />
      <TextInput style={style.Input} placeholder="Restaurants, food" />
    </View>
  );
};

export default Search;
