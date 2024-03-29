import { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Post from '../Screens/Post';
import Profile from '../Screens/Profile';
import Notification from '../Screens/Notification';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../style/style';
import HMIcon from '../Components/Icons';
import { Text, TouchableOpacity, View } from 'react-native';
function TabNavigation({ navigation }: any) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Homes'
            screenOptions={{
                tabBarActiveBackgroundColor: '#343a40',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'relative',
                    backgroundColor: "black",
                    borderColor: 'black',
                    left: 0,
                    right: 1,
                    bottom: 1,
                    elevation: 0,
                    height: 63,
                    ...styles.shadow3,

                }
            }}
        >
            <Tab.Screen name="Homes" component={Home}
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
                    tabBarActiveBackgroundColor: "#343a35",
                    tabBarStyle: {
                        display: "none"
                    },
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "white",
                        fontSize: 20
                    },
                    headerStyle: {
                        backgroundColor: '#343a40',
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={[styles.ms1]} onPress={() => (navigation.navigate('Homes'))} >
                            <HMIcon name="arrow-back-ios-new" color="white" size={25} />
                        </TouchableOpacity>
                    ),
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
                    headerShown: true,
                    headerTitleStyle: {
                        display: "none"
                    },
                    headerLeft: () => (
                        <View style={[styles.p1]}>
                            <HMIcon name="language" size={30} color="white" />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={[styles.flexRow, styles.justifyContentAround]}>
                            <View style={[styles.me1]}>
                                <HMIcon name="diversity-3" size={35} color="white" />
                            </View>
                            <View style={[styles.me1]}>
                                <HMIcon name="drag-handle" size={35} color="white" />
                            </View>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: "#343a40",
                        shadowColor: "white"
                    },
                    tabBarIcon: () => (
                        <View>
                            <View style={{ marginLeft: 5 }}>
                                <HMIcon name='person-outline' size={30} color="grey" />
                            </View>
                            <Text>Profile</Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}
export default TabNavigation;