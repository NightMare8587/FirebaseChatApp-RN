import { View, Text } from 'react-native'
import React from 'react'
import { ThemesProvider } from './ThemeContext'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <ThemesProvider>
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='index'/>
    </Stack>
    </ThemesProvider>
  )
}
