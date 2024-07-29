import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.imageContainer} 
                onPress={() => navigation.navigate('Tilapia')}
            >
                <Image source={require('../../assets/Tilapia.jpg')} style={styles.image} />
                <Text style={styles.imageText}>Tilápia</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.imageContainer} 
                onPress={() => navigation.navigate('Tucunare')}
            >
                <Image source={require('../../assets/Tucunare.jpg')} style={styles.image} />
                <Text style={styles.imageText}>Tucunaré</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', // Coloca os elementos em linha
    },
    imageContainer: {
        alignItems: 'center',
        margin: 20, // Espaçamento entre as imagens
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10, // Espaçamento entre a imagem e o texto
    },
    imageText: {
        fontSize: 16,
        textAlign: 'center',
    },
});
