import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BookMarkScreen } from "../screens/BookMarkScreen";
import { BookTextScale } from "../screens/BookTextScale";
import { BookOpenScreen } from "../screens/BookOpenScreen";
import { BookStared } from "../screens/BookStared";
import { BottomTabNavigation } from "./bottonNavigation";

const RootStack = createStackNavigator()

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Home" component={BottomTabNavigation} />
                <RootStack.Screen name="BookMarkScreen" component={BookMarkScreen} />
                <RootStack.Screen name="BookTextScale" component={BookTextScale} />
                <RootStack.Screen name="BookOpenScreen" component={BookOpenScreen} />
                <RootStack.Screen name="BookStared" component={BookStared} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}