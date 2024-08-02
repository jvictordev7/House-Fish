import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';
import TelaRedefinirSenha from '../screen/TelaRedefinirSenha';
import Home from '../screen/Home';
import Tilapia from '../screen/Peixes/Tilapia';
import Tucunare from '../screen/Peixes/Tucunare';
import Dourado from '../screen/Peixes/Dourado';
import Piau from '../screen/Peixes/Piau';
import Pintado from '../screen/Peixes/Pintado';
import Pirarara from '../screen/Peixes/Pirarara';
import Tambaqui from '../screen/Peixes/Tambaqui';
import Traira from '../screen/Peixes/Traira';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTintColor: 'black',
                headerTitle: '',
                headerBackTitleVisible: false,
                headerTransparent: true,
            }}
        >
            <Stack.Screen name="Login" component={TelaLogin} />
            <Stack.Screen name="Cadastro" component={TelaCadastro} />
            <Stack.Screen name="RedefinirSenha" component={TelaRedefinirSenha} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tilapia" component={Tilapia} />
            <Stack.Screen name="Tucunare" component={Tucunare} />
            <Stack.Screen name="Dourado" component={Dourado} />
            <Stack.Screen name="Piau" component={Piau} />
            <Stack.Screen name="Pintado" component={Pintado} />
            <Stack.Screen name="Pirarara" component={Pirarara} />
            <Stack.Screen name="Tambaqui" component={Tambaqui} />
            <Stack.Screen name="Traira" component={Traira} />
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
