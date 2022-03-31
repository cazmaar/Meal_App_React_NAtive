import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./style";

const CategoryItems = ({ name, image, index,active,setTerm }) => {


  const handlePress = ()=>{
setTerm(name)
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          style.container,
          index === 0 ? { marginLeft: 20 } : { marginLeft: 10 },
          active?{backgroundColor:"rgb(241,186,87)"}:{backgroundColor:"white"}
        ]}
      >
        <View style={style.imagecontainer}>
          <Image source={image} style={style.image} />
        </View>
        <Text style={style.textcontainer}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItems;
