import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
//import {Text, View } from 'react-native'
import Navigations from './navs';


const App = () => {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  )
}

export default App
