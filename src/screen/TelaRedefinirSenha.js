import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilos from '../Estilos';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../src/Services/FirebaseConfig'; // Certifique-se do caminho correto

export default function TelaRedefinirSenha({ navigation }) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // Estado para a mensagem de sucesso ou erro

    const handlePasswordReset = () => {
        setMessage(''); // Limpar mensagem antes de tentar enviar o e-mail
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // E-mail de redefinição enviado com sucesso
                setMessage('E-mail de redefinição enviado. Verifique sua caixa de entrada.');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                
                // Atualizar mensagem de erro com base no código de erro
                switch (errorCode) {
                    case 'auth/invalid-email':
                        setMessage('O e-mail inserido é inválido.');
                        break;
                    case 'auth/user-not-found':
                        setMessage('Nenhum usuário encontrado com esse e-mail.');
                        break;
                    default:
                        setMessage('Ocorreu um erro. Por favor, tente novamente.');
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
                <Text style={Estilos.loginText}>Redefinir Senha</Text>
                
                {/* Exibir mensagem de sucesso ou erro */}
                {message ? <Text style={Estilos.errorText}>{message}</Text> : null}
                
                <TextInput 
                    placeholder="Email" 
                    style={Estilos.input} 
                    keyboardType="email-address" 
                    value={email}
                    onChangeText={setEmail}
                />
                
                <TouchableOpacity style={Estilos.button} onPress={handlePasswordReset}>
                    <Text style={Estilos.buttonText}>Enviar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                
                </TouchableOpacity>
            </View>
        </View>
    );
}
