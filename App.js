import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componnets/Header/index.js';
import Search from './src/componnets/Search/index.js';

export default function App() {
  return (
    <View>
      <Header/>
      <Search/>
      <StatusBar style="auto" />
    </View>
  );
}

