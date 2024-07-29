import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
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
                    <Text style={Estilos.createAccountText}><Text style={Estilos.Text}>Ainda não tem conta?</Text>  Crie Conta agora</Text> 
                    <Text style={Estilos.createAccountText}><Text style={Estilos.Text}>Esqueceu sua senha?</Text>  Crie senha agora</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Estilos.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
