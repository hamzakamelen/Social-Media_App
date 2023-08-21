import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Post from '../Screens/Post';
import Profile from '../Screens/Profile';
import Notification from '../Screens/Notification';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../style/style';
import HMIcon from '../Components/Icons';
import { Text, View } from 'react-native';
function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: "black",
                        bottom: 5,
                        borderColor: 'black',
                        left: 5,
                        right: 5,
                        borderRadius: 15,
                        elevation: 0,
                        height: 63,
                        ...styles.shadow3
                    }
                }}
            >
                <Tab.Screen name="Home" component={Home}
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
                            <View style={[{ marginTop: -45 }]}>
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
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabNavigation;