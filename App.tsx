import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FirstPage from "./screens/FirstPage"
import Welcome from "./screens/Welcome";
import Colors from "./constants/Colors";
import LongButton from "./components/LongButton"

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.brandColorGray }}>
      <View style={{ flex: 1, margin: 20 }}>
        <LongButton />
      </View>
    </View>
  );
}

export default App;
