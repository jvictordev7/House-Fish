import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilos from '../Estilos';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../src/Services/FirebaseConfig'; // Certifique-se do caminho correto

export default function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro

    const handleLogin = () => {
        setErrorMessage(''); // Limpar mensagem de erro antes de tentar login
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
                
                // Atualizar mensagem de erro com base no código de erro
                switch (errorCode) {
                    case 'auth/invalid-email':
                        setErrorMessage('O e-mail inserido é inválido.');
                        break;
                    case 'auth/user-not-found':
                        setErrorMessage('Usuário não encontrado.');
                        break;
                    case 'auth/wrong-password':
                        setErrorMessage('Senha incorreta.');
                        break;
                    default:
                        setErrorMessage('Ocorreu um erro. Por favor, tente novamente.');
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
                
                {/* Exibir mensagem de erro, se houver */}
                {errorMessage ? <Text style={Estilos.errorText}>{errorMessage}</Text> : null}
                
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
