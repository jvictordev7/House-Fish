import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Estilos from '../../Estilos';

export default function Tambaqui() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/tambaqui2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={Estilos.TxtG}>Tambaqui</Text>
                        <Text style={styles.text}>
                            O Tambaqui é um peixe nativo da bacia Amazônica e é altamente valorizado tanto pela pesca comercial quanto esportiva. Conhecido por sua carne saborosa e rica em gordura, o Tambaqui é uma das espécies mais importantes da região.

                            O Tambaqui possui dentes fortes e uma dieta variada, incluindo frutas, sementes e pequenos peixes. É um nadador poderoso e pode oferecer um desafio emocionante para os pescadores.

                            Aqui estão algumas dicas para ajudá-lo a pescar Tambaqui com sucesso:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas naturais, como pedaços de frutas ou sementes. 🍉</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em áreas de várzea, onde o Tambaqui se alimenta durante a cheia. 🌿</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos robustos, já que o Tambaqui pode crescer bastante e oferecer uma luta forte. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja paciente e fique atento aos movimentos sutis da linha, pois o Tambaqui pode ser cauteloso ao morder a isca. 👀</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque durante a manhã ou ao entardecer, quando o Tambaqui é mais ativo. ⏰</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        marginTop: 300,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'transparent', // Torna o fundo do conteúdo transparente para visualizar a imagem de fundo
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: 200,
    },
    scrollView: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
    },
    listItem: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 24,
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bullet: {
        fontSize: 20,
        marginRight: 10,
    },
});
