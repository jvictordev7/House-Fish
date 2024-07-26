import React from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import Estilos from '../Estilos';

export default function TelaLogin({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
        <ImageBackground
            source={require('../../assets/background.png')}
            style={Estilos.imageBackground}
            resizeMode="cover"
        />
        <View style={Estilos.container}>
            <Image source={require('../../assets/logo.png')} style={Estilos.logo} />
            <Text style={Estilos.loginText}>Login</Text>
            <TextInput placeholder="Email" style={Estilos.input} keyboardType="email-address" />
            <TextInput placeholder="Senha" style={Estilos.input} secureTextEntry />
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={Estilos.createAccountText}><Text style={Estilos.Text}>Ainda não tem conta? </Text>Crie agora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.button} onPress={() => {}}>
            <Text style={Estilos.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}
