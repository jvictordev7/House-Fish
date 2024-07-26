import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
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
