import React from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
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
            <TextInput placeholder="Email" style={Estilos.input} keyboardType="email-address" />
            <TextInput placeholder="Senha" style={Estilos.input} secureTextEntry />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={Estilos.createAccountText}><Text style={Estilos.Text}>Já tem uma conta? </Text>Faça login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.button} onPress={() => {}}>
            <Text style={Estilos.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}
