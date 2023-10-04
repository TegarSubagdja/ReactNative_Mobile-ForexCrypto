import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import NextButton from "../components/NextButton";
import Colors from "../constants/Colors";

const FirstPage = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Text style={styles.skip}>Skip</Text>
        </View>
        <View style={{ padding: 40}}>
          <Image source={require('../assets/image/pertama.png')} />
        </View>
        <View style={{ width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 35 }}>
            Welcome To
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: Colors.baseColorWhite, fontSize: 35, fontFamily: 'Poppins' }}>
              Fox
            </Text>
            <Text style={{ color: Colors.brandColorYellow, fontSize: 35 }}>
              crypto
            </Text>
          </View>
        </View>
        <View style={styles.nextButton}>
          <NextButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.brandColorGray,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  nextButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  skip: {
    alignSelf: "flex-end",
    color: Colors.brandColorYellow,
    fontSize: 20,
    right: 0
  }
});

export default FirstPage;
