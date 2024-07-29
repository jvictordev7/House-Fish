// src/components/CustomBackButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomBackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginLeft: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
});

export default CustomBackButton;
