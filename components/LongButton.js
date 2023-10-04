import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const LongButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
    );    
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        backgroundColor: Colors.brandColorYellow,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: Colors.brandColorGray
    }
});

export default LongButton;
