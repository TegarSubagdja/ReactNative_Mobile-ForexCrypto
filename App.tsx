import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from "./screens/FirstPage";
import Welcome from "./screens/Welcome";
import Colors from "./constants/Colors";
import LongButton from "./components/LongButton";
import TextField from "./components/TextField";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
