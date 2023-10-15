import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const TextField = ({ textPlace }) => {
    return (
        <View style={styles.paddingInput}>
            <TextInput
                style={styles.button}
                placeholder={textPlace}
                placeholderTextColor={Colors.baseColorInput} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    paddingInput: {
        borderRadius: 12,
        backgroundColor: Colors.baseColorGray
    },
    button: {
        width: '100%',
        height: 50,
        marginHorizontal: 10
    }
});

export default TextField;
