import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryItems from './src/componnets/CategooryItems/index.js';
import Header from './src/componnets/Header/index.js';
import Search from './src/componnets/Search/index.js';
import style from './style.js';

export default function App() {
  return (
    <View style={style.container} >
      <Header />
      <Search />
      <View style={style.categorycontainer} >
        <CategoryItems name="Burger" />
        <CategoryItems name="Pizzas" />
        <CategoryItems name="Dessert" />
        <CategoryItems name="Drinks" />
        <CategoryItems name="Burger" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

