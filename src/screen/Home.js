import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilos from '../Estilos'; // Importando o Estilos.js

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/background.png')} // Certifique-se de que o caminho para a imagem de fundo está correto
                style={Estilos.imageBackground}
                resizeMode="cover"
            >
                <View style={Estilos.homeContainer}>
                    <TouchableOpacity 
                        style={Estilos.imageContainer} 
                        onPress={() => navigation.navigate('Tilapia')}
                    >
                        <Image source={require('../../assets/tilapia.png')} style={Estilos.image} />
                        <Text style={Estilos.imageText}>Tilápia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Estilos.imageContainer} 
                        onPress={() => navigation.navigate('Tucunare')}
                    >
                        <Image source={require('../../assets/tucunare.png')} style={Estilos.image} />
                        <Text style={Estilos.imageText}>Tucunaré</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
