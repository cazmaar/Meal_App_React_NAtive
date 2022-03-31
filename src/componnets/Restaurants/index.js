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
            "Bearer 8QoDRv24VSSNu-MXJ5evOzfifSjxivpCSUNs-G9y7eSSUHVb3_UAC46QNnC0oDtwfe2g8jZ5wB218A7KEcOprRxz_EwQVaKZwiGR7ABHXBPGtL2EW2ztYQ1rHiJGYnYx",
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
