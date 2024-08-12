import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilos from '../Estilos';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../src/Services/FirebaseConfig'; // Certifique-se do caminho correto

export default function TelaCadastro({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        setErrorMessage(''); // Limpar mensagem de erro antes de tentar registro
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Registro bem-sucedido
                const user = userCredential.user;
                console.log(user);
                // Navegar para a tela Home após o registro bem-sucedido
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
                    case 'auth/email-already-in-use':
                        setErrorMessage('O e-mail já está em uso.');
                        break;
                    case 'auth/weak-password':
                        setErrorMessage('A senha deve ter pelo menos 6 caracteres.');
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
                <Text style={Estilos.loginText}>Cadastro</Text>
                
                {/* Exibir mensagem de erro, se houver */}
                {errorMessage ? <Text style={Estilos.errorText}>{errorMessage}</Text> : null}
                
                <TextInput 
                    placeholder="Nome" 
                    style={Estilos.input} 
                    value={name}
                    onChangeText={setName}
                />
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
                
                <TouchableOpacity style={Estilos.button} onPress={handleRegister}>
                    <Text style={Estilos.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    
                </TouchableOpacity>
            </View>
        </View>
    );
}
