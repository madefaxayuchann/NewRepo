import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import Attandance from "./screens/Attandance";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFFFFF" },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFFFFF" },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFFFFF" },
          }}
        />
        <Stack.Screen
          name="Attandance"
          component={Attandance}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFFFFF" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
