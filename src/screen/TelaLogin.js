import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilos from '../Estilos';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../src/Services/FirebaseConfig'; // Certifique-se do caminho correto

export default function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                console.log(user);
                // Navegar para a tela Home após o login bem-sucedido
                navigation.navigate('Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // Aqui você pode exibir um alerta ou mensagem de erro para o usuário
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
                
                <View style={Estilos.rowContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={Estilos.createAccountText}>
                            <Text style={Estilos.Text}>Ainda não tem conta?</Text> Crie Conta
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
                        <Text style={Estilos.createAccountText}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={Estilos.button} onPress={handleLogin}>
                    <Text style={Estilos.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
