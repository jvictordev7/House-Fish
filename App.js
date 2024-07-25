// App.js
import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import Estilos from "./src/Estilos";

export default function App () {
  return (
    
    <View style={Estilos.container}>
      <Image source={require('./assets/logo.png')} style={Estilos.logo} />
      <Text style={Estilos.loginText}>Welcome Tilapio</Text>
      <TextInput placeholder="Email" style={Estilos.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={Estilos.input} secureTextEntry />
      <TouchableOpacity>
        <Text style={Estilos.createAccountText}>Crie sua conta. TESTE</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => {}} style={Estilos.button} />
    </View>
  )
}
