// src/GradientBackground.js
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Estilos from './Estilos';

const GradientBackground = ({ children }) => {
    return (
        <LinearGradient
        colors={['#0000ff', '#ffffff']} // Defina as cores do gradiente aqui
        style={Estilos.gradient}
        >
        {children}
        </LinearGradient>
    );
};

export default GradientBackground;
