import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#c1c2c1'
    },

    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },

    loginText: {
        fontSize: 25,
        marginBottom: 15,
    },

    input: {
        width: '90%',
        height: 50,
        padding: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        marginBottom: 15,
    },

    createAccountText: {
        color: 'blue',
        marginBottom: 15,
    },

    button: {
        width: '200%',
        padding: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        borderRadius: 8,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
