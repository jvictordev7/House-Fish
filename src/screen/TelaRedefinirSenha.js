import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilos from '../Estilos';

export default function TelaRedefinirSenha({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/background.png')}
                style={Estilos.imageBackground}
                resizeMode="cover"
            />
            <View style={Estilos.container}>
                <Image source={require('../../assets/logo.png')} style={Estilos.logo} />
                <Text style={Estilos.loginText}>Redefinir Senha</Text>
                <TextInput placeholder="Email" style={Estilos.input} keyboardType="email-address" />
                
                <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={Estilos.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
