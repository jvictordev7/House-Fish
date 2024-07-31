import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Estilos from '../../Estilos';

export default function Tucunare() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/tucunare2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={Estilos.TxtG}>Tucunaré</Text>
                        <Text style={styles.text}>
                            O Tucunaré é um peixe de água doce nativo da Bacia Amazônica e é conhecido por sua beleza e comportamento agressivo. Ele é muito apreciado na pesca esportiva devido à sua força e resistência. O Tucunaré possui uma coloração vibrante e manchas características em seu corpo.

                            Este peixe é uma excelente fonte de proteína e possui um sabor marcante, sendo utilizado em diversos pratos típicos da culinária amazônica. Além disso, o Tucunaré é rico em vitaminas e minerais, como vitamina B3, fósforo e potássio.

                            Pescar Tucunaré pode ser uma experiência desafiadora e empolgante. Aqui estão algumas dicas para ajudá-lo a ter sucesso na pesca do Tucunaré:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas artificiais como plugs, jigs e hélices, que imitam a presa natural do Tucunaré. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em áreas próximas a troncos submersos e vegetação aquática, onde o Tucunaré costuma se esconder. 🌿</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos de pesca robustos e linhas resistentes para aguentar a força do Tucunaré. 💪</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja paciente e esteja preparado para uma luta emocionante, pois o Tucunaré é conhecido por seus saltos e corridas rápidas. 🐟</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Experimente diferentes horários do dia, como início da manhã ou final da tarde, quando os Tucunarés são mais ativos. ⏰</Text>
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
