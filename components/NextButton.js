import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const NextButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            {/* <Image source={require('../assets/icons/Forward_1.png')} /> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: Colors.brandColorYellow,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NextButton;