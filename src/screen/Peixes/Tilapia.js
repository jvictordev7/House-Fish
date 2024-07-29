// src/screens/Peixes/Tilapia.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomBackButton from '../../CustomBackButton'; // Ajuste o caminho conforme necessário

export default function Tilapia({ navigation }) {
    return (
        <View style={styles.container}>
            <CustomBackButton onPress={() => navigation.goBack()} />
            <Text style={styles.text}>Tilápia</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});
