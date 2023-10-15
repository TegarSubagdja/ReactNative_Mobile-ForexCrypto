import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Checkbox = ({ checked, onCheck }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheck = () => {
        setIsChecked(!isChecked);
        if (onCheck) {
            onCheck(!isChecked);
        }
    };

    return (
        <TouchableOpacity onPress={handleCheck}>
            <View style={styles.checkbox}>
                {isChecked && <Text style={styles.color}>✓</Text>}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    color: {
        color: Colors.brandColorYellow
    },
    checkbox: {
        width: 20,
        height: 20,
        marginVertical: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.baseColorDark,
        backgroundColor: Colors.baseColorGray,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Checkbox;
