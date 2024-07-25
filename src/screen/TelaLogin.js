// src/screens/TelaLogin.js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import Estilos from '../Estilos';
import firebase from '../firebaseConfig';

export default function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('Home'); // Navega para a tela Home após o login bem-sucedido
        })
        .catch(error => {
            if (error.code === 'auth/user-not-found') {
            navigation.navigate('Cadastro', { email });
            } else {
            alert(error.message);
            }
        });
    };

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
            <TextInput
            placeholder="Email"
            style={Estilos.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            placeholder="Senha"
            style={Estilos.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={Estilos.createAccountText}>
                <Text style={Estilos.Text}>Ainda não tem conta? </Text>Crie agora
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.button} onPress={handleLogin}>
            <Text style={Estilos.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }
