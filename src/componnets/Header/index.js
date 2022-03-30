import React from 'react'
import {View, Text} from "react-native"
import style from './style'

const Header = () => {
  return (
    <View style={style.container}>
    <Text style={style.header1}>Grab your</Text>
    <Text style={style.header2}>delicious meal!</Text>
    </View>
  )
}

export default Header