import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2090ea'},
  headerTitleStyle: { color: 'white'},
  headerTintColor: 'white'
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>   
  )
}

export default App

const styles = StyleSheet.create({})