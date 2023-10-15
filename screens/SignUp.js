import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import TextField from "../components/TextField";
import LongButton from "../components/LongButton";
import CheckBox from "../components/CheckBox";

const SignUp = () => {
    return (
        <View style={styles.body}>
            <View style={styles.heading}>
                <Text style={styles.textHeading}>
                    Sign Up
                </Text>
            </View>
            <View style={styles.input}>
                <View style={{ width: '100%' }} >
                    <Text style={styles.text}>
                        Username
                    </Text>
                    <TextField textPlace={'Masukan username'} />
                </View>
                <View style={{ width: '100%' }} >
                    <Text style={styles.text}>
                        Password
                    </Text>
                    <TextField textPlace={'Masukan password'} />
                </View>
                <Text style={styles.yellowText}>Forgot password</Text>
                <Text style={styles.darkText}>At least 8 characters with uppercase latters and numbers</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox />
                    <View style={{ width: '100%' }}>
                        <Text style={styles.checkboxText}>Saya menyetujui dan juga sayasegala hal yang akan terjadi di masa depan</Text>
                    </View>
                </View>
                <LongButton textField={'Sign Up'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
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
    },
    input: {
        width: '100%',
        flexDirection: "column",
        paddingVertical: 30
    },
    text: {
        color: Colors.baseColorWhite,
        fontFamily: 'Poppins',
        marginVertical: 10
    },
    yellowText: {
        color: Colors.brandColorYellow,
        fontFamily: 'Poppins',
        marginVertical: 10
    },
    darkText: {
        color: Colors.baseColorDark
    },
    checkboxText: {
        color: Colors.baseColorMid,
        marginLeft: 20
    }
});

export default SignUp;