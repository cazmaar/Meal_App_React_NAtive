import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CategoryItems from "./src/componnets/CategooryItems/index.js";
import Header from "./src/componnets/Header/index.js";
import Search from "./src/componnets/Search/index.js";
import style from "./style.js";
import burger from "./src/Images/burger.png";
import cake from "./src/Images/cake.png";
import pasta from "./src/Images/pasta.png";
import smoothies from "./src/Images/smoothies.png";
import steak from "./src/Images/steak.png";
import { useState } from "react";
import Restaurants from "./src/componnets/Restaurants/index.js";

export default function App() {
  const [term, setTerm] = useState("burger");
  const category = [
    { name: "pie", image: burger },
    { name: "pizza", image: cake },
    { name: "dessert", image: pasta },
    { name: "drinks", image: pasta },
    { name: "burger", image: steak },
  ];



  return (
    <View style={style.container}>
      <Header />
      <Search setTerm={setTerm} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}
        renderItem={({ item, index }) => {
          return (
            <CategoryItems
              name={item.name}
              image={item.image}
              index={index}
              active={item.name === term}
              setTerm={setTerm}
              key={index}
            />
          );
        }}
      />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}
