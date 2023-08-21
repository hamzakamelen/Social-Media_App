import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{
          headerShown:false
        }} name="Login" component={Login} />
        <Stack.Screen options={{
          headerShown:false
        }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{
          headerShown:false
        }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation