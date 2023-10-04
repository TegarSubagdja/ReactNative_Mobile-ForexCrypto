import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../constants/Colors";
import ShortButton from "../components/ShortButton";

const Welcome = () => {
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require("../assets/image/BackWelcome.png")} />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>
                        Fast and Flexible
                    </Text>
                    <Text style={styles.text}>
                        Trading
                    </Text>
                </View>
                <View style={styles.button}>
                    <ShortButton  type="border" />
                    <ShortButton />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        paddingTop: 50,
    },
    textcontainer: {
        width: '100%',
        paddingVertical: 40
    },
    text: {
        color: Colors.baseColorWhite,
        fontFamily: "Poppins",
        fontSize: 35,
    }, 
    button: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    }
});

export default Welcome;
