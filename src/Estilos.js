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
        width: 200,
        height: 200,
        padding: 10,
        bottom: 30,
    },
    loginText: {
        fontSize: 24,
        marginBottom: 15,
        color: '#fff',
        bottom: 50,
    },
    input: {
        width: '90%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#fff', 
        bottom: 50, 
    },
    createAccountText: {
        color: 'blue',
        marginBottom: 0,
        bottom: 60,
        textAlign: 'center'
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
        bottom: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 20, 
    },
    homeContainer: {
        flex: 1,
        flexWrap: 'wrap', // Permite que os itens se movam para a próxima linha
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start', // Alinha as imagens ao topo
        padding: 10,
        marginTop: 20, // Espaço no topo para afastar do topo da tela
    },
    imageBackground: {
        position: 'absolute',
        marginTop: 250,
        left: 0,
        right: 0,
        width: width,
        height: height * 0.9, // Ajusta a altura da imagem de fundo para melhor encaixe
    },
    imageContainer: {
        alignItems: 'center',
        margin: 10, // Espaçamento entre as imagens
        width: (width - 50) / 3, // Ajusta o tamanho para permitir 3 imagens por linha
    },
    image: {
        width: '100%',
        height: 90,
        marginBottom: 8, // Espaçamento entre a imagem e o texto
        borderRadius: 20,
        borderColor: 'red',
    },
    imageText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black', // Cor do texto para contraste com o fundo
    },
    headerContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20, // Espaçamento vertical ao redor do cabeçalho
    },
    headerLogo: {
        width: 110,
        height: 110,
        bottom: -50, 
    },

    TxtG: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
});
