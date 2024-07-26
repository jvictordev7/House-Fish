import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo preto semitransparente
    },
    logo: {
        width: 150,
        height: 150,
        position: 'absolute',
        bottom: 530, 
    },
    loginText: {
        fontSize: 24,
        marginBottom: 15,
        color: '#fff',
        bottom: 55,
    },
    input: {
        width: '90%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#fff', 
        bottom: 55, 
    },
    createAccountText: {
        color: 'blue',
        marginBottom: 15,
        bottom: 60,
    },

    Text: {
        color: '#fff'
    },
    button: {
        width: '40%',
        padding: 10, 
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 0,
        bottom: 65,
    },
    buttonText: {
        color: 'white',
        fontSize: 20, 
    },
    imageBackground: {
        position: 'absolute',
        bottom: -170, // Começar de baixo para cima
        left: 0,
        right: 0,
        width: width,
        height: height * 0.99, // 99% da altura da tela
    },
});
