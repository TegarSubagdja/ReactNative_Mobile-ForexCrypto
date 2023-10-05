import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const TextField = () => {
    return (
        <View style={styles.paddingInput}>
            <TextInput
                style={styles.button}
                placeholder="Masukkan teks di sini"
                placeholderTextColor={Colors.baseColorInput} // Gunakan tanda '=' dan berikan warna dalam bentuk string
                onChangeText={(text) => {
                    // Lakukan sesuatu dengan nilai teks yang diinputkan
                }}
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
