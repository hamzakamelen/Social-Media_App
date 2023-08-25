import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home';
import TabNavigation from './Tabs';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{
          headerShown: false
        }} name="Login" component={Login} />
        <Stack.Screen options={{
          headerShown: false
        }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{
          headerShown: false
        }} name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

{/* <Tab.Screen name="Home" component={Home}
options={{
    tabBarIcon: () => (
        <View>
            <View style={[{ marginLeft: 3 }]}>
                <HMIcon name='home' size={30} color="grey" />
            </View>
            <Text>Home</Text>
        </View>
    )
}}
/>
<Tab.Screen name="Search" component={Search}
options={{
    tabBarIcon: () => (
        <View>
            <View style={{ marginLeft: 5 }}>
                <HMIcon name='search' size={30} color="grey" />
            </View>
            <Text>Search</Text>
        </View>
    )
}}
/>
<Tab.Screen name="Post" component={Post}
options={{
    tabBarIcon: () => (
        <View style={[{ marginTop: -8 }]}>
            <View style={[styles.bgDanger, styles.roundedPill, { marginLeft: -4 }]}>
                <HMIcon name='add' size={45} color="white" />
            </View>
        </View>
    )
}}
/>
<Tab.Screen name="Notification" component={Notification}
options={{
    tabBarIcon: () => (
        <View>
            <View style={{ marginLeft: 8 }}>
                <HMIcon name='favorite-outline' size={30} color="grey" />
            </View>
            <Text>Activity</Text>
        </View>
    )
}} />
<Tab.Screen name="Profile" component={Profile}
options={{
    tabBarIcon: () => (
        <View>
            <View style={{ marginLeft: 5 }}>
                <HMIcon name='person-outline' size={30} color="grey" />
            </View>
            <Text>Profile</Text>
        </View>
    )
}} /> */}