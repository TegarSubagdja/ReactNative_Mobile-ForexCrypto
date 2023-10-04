import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors"; 

const Button = () => {
    return (
        <TouchableOpacity style={styles.gaya}>
            <Text style={styles.text}>
                Tegar
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gaya: {
        width: 100,
        height: 50,
        backgroundColor: Colors.merah,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: Colors.brandColorGray,
        fontFamily: 'Poppins'
    }
});

export default Button;
