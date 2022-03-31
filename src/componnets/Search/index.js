import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import style from "./style";
const Search = ({ setTerm }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e);
  };

  const handleEndEditing = () => {
    if (input.length > 0) {
      setTerm(input);
      setInput("")
    }
  };

  return (
    <View style={style.container}>
      <FontAwesome name="search" size={25} />

      <TextInput
        onChangeText={handleChange}
        style={style.Input}
        value={input}
        placeholder="Restaurants, food"
        onEndEditing={handleEndEditing}
      />
    </View>
  );
};

export default Search;
