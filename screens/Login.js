import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const Login = () => {
    return (
        <View style={styles.body}>
            <View style={styles.heading}>
                <Text style={styles.textHeading}>
                    Login
                </Text>
            </View>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.brandColorGray
    },
    heading: {
        width: '100%',
        alignItems: 'center'
    },
    textHeading: {
        color: Colors.baseColorWhite,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    }
});

export default Login;