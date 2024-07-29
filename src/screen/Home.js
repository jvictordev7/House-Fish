import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import Estilos from '../Estilos'; // Importando o Estilos.js

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/background2.png')} // Imagem de fundo
                style={Estilos.imageBackground}
                resizeMode="cover"
            >
                <View style={styles.overlayContainer} />
            </ImageBackground>
            <View style={Estilos.headerContainer}>
                <Image source={require('../../assets/logohouse.png')} style={Estilos.headerLogo} />
            </View>
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
                <TouchableOpacity 
                    style={Estilos.imageContainer} 
                    onPress={() => navigation.navigate('Dourado')}
                >
                    <Image source={require('../../assets/dourado.png')} style={Estilos.image} />
                    <Text style={Estilos.imageText}>Dourado</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={Estilos.imageContainer} 
                    onPress={() => navigation.navigate('Piau')}
                >
                    <Image source={require('../../assets/piau.png')} style={Estilos.image} />
                    <Text style={Estilos.imageText}>Piau</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={Estilos.imageContainer} 
                    onPress={() => navigation.navigate('Pintado')}
                >
                    <Image source={require('../../assets/pintado.png')} style={Estilos.image} />
                    <Text style={Estilos.imageText}>Pintado</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={Estilos.imageContainer} 
                    onPress={() => navigation.navigate('Pirarara')}
                >
                    <Image source={require('../../assets/pirarara.png')} style={Estilos.image} />
                    <Text style={Estilos.imageText}>Pirarara</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={Estilos.imageContainer} 
                    onPress={() => navigation.navigate('Tambaqui')}
                >
                    <Image source={require('../../assets/tambaqui.png')} style={Estilos.image} />
                    <Text style={Estilos.imageText}>Tambaqui</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={Estilos.imageContainer} 
                    onPress={() => navigation.navigate('Traira')}
                >
                    <Image source={require('../../assets/traira.png')} style={Estilos.image} />
                    <Text style={Estilos.imageText}>Traíra</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1, // Faz com que o contêiner ocupe o espaço total da tela
        justifyContent: 'center', // Centraliza o conteúdo dentro do ImageBackground
        alignItems: 'center', // Alinha o conteúdo horizontalmente
        position: 'absolute', // Faz com que o contêiner de sobreposição fique sobre o ImageBackground
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
