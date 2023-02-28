import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/screens/Home/Homepage';
import Discover from './src/screens/Home/Category';
import Context from './Api/Context';
import Allnews from './src/screens/Home/Category';
import Splashscreen from './src/screens/Home/Splashscreen';





const Stack = createNativeStackNavigator();



 function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splashscreen} />
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Allnews" component={Allnews} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
export default () => { 
  return(
    <Context>
      <App/>
    </Context>
  )
}
