import React from "react";
import { StyleSheet, View, Image, Text, LogBox } from "react-native";
import FirstPage from "./screens/FirstPage"
import Welcome from "./screens/Welcome";
import Colors from "./constants/Colors";
import LongButton from "./components/LongButton"
import TextField from "./components/TextField";
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import Home from "./screens/Home"

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.brandColorGray }}>
      <View style={{ flex: 1, margin: 20 }}>
        <Home />
      </View>
    </View>
  );
}

export default App;
