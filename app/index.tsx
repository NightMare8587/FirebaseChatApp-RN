import { View, Text } from 'react-native'
import React from 'react'
import {GlobalStyles} from '../constants/Styles'
export default function index() {
  const styles = GlobalStyles();
  return (
    <View style = {styles.container}>
      <Text>index</Text>
    </View>
  )
}