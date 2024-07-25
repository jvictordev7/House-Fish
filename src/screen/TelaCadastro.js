// src/screens/TelaCadastro.js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import Estilos from '../Estilos';
import firebase from '../firebaseConfig';

export default function TelaCadastro({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('Login'); // Navega de volta para a tela de login após o cadastro
        })
        .catch(error => {
            alert(error.message);
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
            <Text style={Estilos.loginText}>Cadastro</Text>
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
            <TouchableOpacity style={Estilos.button} onPress={handleSignUp}>
            <Text style={Estilos.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }
