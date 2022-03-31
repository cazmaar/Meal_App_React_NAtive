import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import style from "./style";
import axios from "axios";

const Restaurants = ({ term }) => {
 const [fetched, setFetched] = useState("h")
  const fetch = async () => {
    const res = await axios.get(
      "https://api.yelp.com/v3/businesses/search?limit=15&term=Dessert&location=Toronto",
      {
        headers: {
          Authorization:
          
        },
      }
    );

  setFetched("res")
  };  

  useEffect(() => {
   fetch;
   console.log(fetched)
  }, [term]);

  return (
    <View style={style.container}>
      <Text style={style.header}>Restaurants</Text>
    </View>
  );
};

export default Restaurants;
