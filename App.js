import React from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import Estilos from './src/Estilos';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/background.png')} 
        style={Estilos.imageBackground}
        resizeMode="cover"
      />
      <View style={Estilos.container}>
        <Image source={require('./assets/logo.png')} style={Estilos.logo} />
        <Text style={Estilos.loginText}>Login</Text>
        <TextInput placeholder="Email" style={Estilos.input} keyboardType="email-address" />
        <TextInput placeholder="Senha" style={Estilos.input} secureTextEntry />
        <TouchableOpacity>
          <Text style={Estilos.createAccountText}>Crie sua conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Estilos.button} onPress={() => {}}>
          <Text style={Estilos.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
