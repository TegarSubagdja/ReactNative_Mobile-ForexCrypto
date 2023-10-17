import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import TextField from "../components/TextField";
import LongButton from "../components/LongButton";
import Home from "../screens/Home";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.heading}>
        <Text style={styles.textHeading}>
          Login
        </Text>
      </View>
      <View style={styles.input}>
        <View style={{ width: "100%" }}>
          <Text style={styles.text}>
            Username
          </Text>
          <TextField textPlace="Masukan username" />
        </View>
        <View style={{ width: "100%" }}>
          <Text style={styles.text}>
            Password
          </Text>
          <TextField textPlace="Masukan password" />
        </View>
        <Text style={styles.yellowText}>Forgot password</Text>
        <LongButton
          textField="Login"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.brandColorGray,
  },
  heading: {
    width: "100%",
    alignItems: "center",
  },
  textHeading: {
    color: Colors.baseColorWhite,
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  input: {
    width: "100%",
    flexDirection: "column",
    paddingVertical: 30,
  },
  text: {
    color: Colors.baseColorWhite,
    fontFamily: "Poppins",
    marginVertical: 10,
  },
  yellowText: {
    color: Colors.brandColorYellow,
    fontFamily: "Poppins",
    marginVertical: 10,
  },
});

export default Login;
