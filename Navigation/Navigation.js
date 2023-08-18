import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Menu from '../Screens/Menu';

const Navigate = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{
          headerShown:false
        }} name="Login" component={Login} />
        <Stack.Screen options={{
          headerShown:false
        }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{
          headerShown:false
        }} name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigate