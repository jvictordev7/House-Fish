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
                
                <View style={Estilos.rowContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={Estilos.createAccountText}><Text style={Estilos.Text}>Ainda não tem conta?</Text> Crie Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
                        <Text style={Estilos.createAccountText}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Estilos.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
