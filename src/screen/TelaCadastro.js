import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilos from '../Estilos';

export default function TelaCadastro({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/background.png')}
                style={Estilos.imageBackground}
                resizeMode="cover"
            />
            <View style={Estilos.container}>
                <Image source={require('../../assets/logo.png')} style={Estilos.logo} />
                <Text style={Estilos.loginText}>Cadastro</Text>
                <TextInput placeholder="Nome" style={Estilos.input} />
                <TextInput placeholder="Email" style={Estilos.input} keyboardType="email-address" />
                <TextInput placeholder="Senha" style={Estilos.input} secureTextEntry />
                <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Estilos.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
