import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Estilos from '../../Estilos'

export default function Pirarara() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/pirarara2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={Estilos.TxtG}>Pirarara</Text>
                        <Text style={styles.text}>
                            A Pirarara é um peixe de água doce muito popular na bacia Amazônica e do Araguaia-Tocantins. Conhecida por sua coloração vibrante e sua grande força, a Pirarara é altamente valorizada por pescadores esportivos. Com uma dieta variada, que inclui peixes menores, frutos e crustáceos, a Pirarara pode crescer até tamanhos impressionantes.
                            
                            Além de ser um desafio para pescadores, a Pirarara também é uma espécie importante para a aquicultura devido ao seu rápido crescimento e resistência a diferentes condições ambientais.
                            
                            Pescar Pirarara pode ser uma experiência emocionante. Aqui estão algumas dicas para ajudá-lo a ter sucesso na pesca da Pirarara:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas naturais como peixes menores ou pedaços de carne. 🐟</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em águas profundas e próximas a troncos submersos, onde as Pirararas gostam de se esconder. 🌳</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos robustos, pois a Pirarara é um peixe forte e pode oferecer muita resistência. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja paciente e esteja preparado para uma luta longa e intensa. 💪</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque durante a noite ou no início da manhã, quando as Pirararas são mais ativas. 🌙</Text>
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
