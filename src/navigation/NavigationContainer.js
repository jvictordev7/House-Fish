// src/navigation/NavigationContainer.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';
import Home from '../screen/Home';
import Tilapia from '../screen/Peixes/Tilapia';
import Tucunare from '../screen/Peixes/Tucunare';
import CustomBackButton from '../CustomBackButton'; // Ajuste o caminho conforme necessário


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent', // Torna o fundo do cabeçalho transparente
                },
                headerTintColor: '#fff', // Cor do texto do cabeçalho
                headerTitle: '', // Remove o título
                headerBackTitleVisible: false, // Remove o título de voltar
                headerTransparent: true, // Torna o cabeçalho transparente
            }}
        >
            <Stack.Screen name="Login" component={TelaLogin} />
            <Stack.Screen name="Cadastro" component={TelaCadastro} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen 
                name="Tilapia" 
                component={Tilapia} 
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <CustomBackButton onPress={() => navigation.goBack()} />
                    ),
                })}
            />
            <Stack.Screen 
                name="Tucunare" 
                component={Tucunare} 
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <CustomBackButton onPress={() => navigation.goBack()} />
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
