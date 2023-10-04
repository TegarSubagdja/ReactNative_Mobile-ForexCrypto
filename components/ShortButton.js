import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const ShortButton = ({ type }) => {
    const buttonStyle = {
        ...styles.buttonBase,
        ...(type === "border" ? styles.border : styles.filled),
    };

    const textColor = {
        color: type === "border" ? Colors.brandColorYellow : Colors.brandColorGray,
    };

    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={[styles.text, textColor]}>Login</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonBase: {
        height: 50,
        width: 165,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    border: {
        borderWidth: 2,
        borderColor: Colors.brandColorYellow,
    },
    filled: {
        backgroundColor: Colors.brandColorYellow,
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 19,
    },
});

export default ShortButton;
