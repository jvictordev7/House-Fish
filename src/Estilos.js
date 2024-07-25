import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fundo preto semitransparente
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 0,
    },
    loginText: {
        fontSize: 24,
        marginBottom: 15,
        color: '#fff', // 
    },
    input: {
        width: '90%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: '#fff', 
    },
    createAccountText: {
        color: 'blue',
        marginBottom: 15,
    },
    button: {
        width: '50%',
        padding: 10, 
        backgroundColor: 'blue',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 20, 
    },
    imageBackground: {
        position: 'absolute',
        bottom: -180, // Começar de baixo para cima
        left: 0,
        right: 0,
        width: width,
        height: height * 0.99, // 99% da altura da tela
    },
});
