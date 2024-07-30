import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

export default function Dourado() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/dourado2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            O Dourado é um dos peixes mais icônicos da pesca esportiva na América do Sul, especialmente no Brasil e na Argentina. Conhecido como o "Rei do Rio", o Dourado é famoso por sua cor dourada vibrante e pela força que demonstra ao ser fisgado, proporcionando uma experiência emocionante para os pescadores.

                            Este peixe possui carne de alta qualidade, sendo muito apreciado na culinária local. Além disso, o Dourado é rico em nutrientes, como proteínas, vitaminas do complexo B e minerais essenciais, como fósforo e potássio.

                            Pescar Dourado pode ser um desafio gratificante. Aqui estão algumas dicas para ajudá-lo a ter sucesso na pesca do Dourado:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas naturais como pequenos peixes e camarões, ou iscas artificiais que imitam presas em movimento. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em áreas de corredeiras e quedas d'água, onde o Dourado costuma caçar suas presas. 🌊</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos de pesca robustos, como linhas de alta resistência e anzóis fortes, para aguentar a força do Dourado. 💪</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja paciente e preparado para uma luta intensa, pois o Dourado é conhecido por suas acrobacias e saltos espetaculares. 🐟</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Experimente pescar em diferentes horários do dia, como início da manhã ou final da tarde, quando os Dourados são mais ativos. ⏰</Text>
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
        width: 200,
        height: 200,
        width: '100%',
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
