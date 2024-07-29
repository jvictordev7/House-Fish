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
        width: 110,
        height: 110,
        position: 'absolute',
        bottom: 590, 
        padding: 50,
    },
    loginText: {
        fontSize: 24,
        marginBottom: 15,
        color: '#fff',
        bottom: 25,
    },
    input: {
        width: '90%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#fff', 
        bottom: 30, 
    },
    createAccountText: {
        color: 'blue',
        marginBottom: 0,
        bottom: 40,
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
        bottom: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 20, 
    },

    homeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageBackground: {
        position: 'absolute',
        bottom: -170, // Começar de baixo para cima
        left: 0,
        right: 0,
        width: width,
        height: height * 0.99, // 99% da altura da tela
    },
    // Estilos adicionais para a tela Home
    imageContainer: {
        alignItems: 'center',
        margin: 20, // Espaçamento entre as imagens
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10, // Espaçamento entre a imagem e o texto
    },
    imageText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black', // Cor do texto para contraste com o fundo
    },
});
