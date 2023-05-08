import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { BookMarkScreen } from "../screens/BookMarkScreen";
import { BookTextScale } from "../screens/BookTextScale";
import { BookOpenScreen } from "../screens/BookOpenScreen";
import { BookStared } from "../screens/BookStared";
import { icons } from "../constants";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    height: 90,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    shadowColor: '#FFE5E5',
                    shadowOffset: { width: 4, height: 4 },
                    shadowOpacity: 24,
                    shadowRadius: 15,
                    elevation: 8,
                    paddingTop: 12,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", bottom: 10 }}>
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#2176FF" : "#7B8CB5"
                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen
                name="BookMarkScreen"
                component={BookMarkScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", bottom: 10 }}>
                            <Image
                                source={icons.bookmark}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#2176FF" : "#7B8CB5"
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="BookTextScale"
                component={BookTextScale}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", bottom: 10 }}>
                            <Image
                                source={icons.bookTextScale}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#2176FF" : "#7B8CB5"
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="BookOpenScreen"
                component={BookOpenScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", bottom: 10 }}>
                            <Image
                                source={icons.bookOpen}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#2176FF" : "#7B8CB5"
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="BookStared"
                component={BookStared}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", bottom: 10 }}>
                            <Image
                                source={icons.bookStar}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#2176FF" : "#7B8CB5"
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export { BottomTabNavigation }