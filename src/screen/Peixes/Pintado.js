import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Estilos from '../../Estilos';

export default function Pintado() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/pintado2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={Estilos.TxtG}>Pintado</Text>
                        <Text style={styles.text}>
                            O Pintado é um peixe de água doce muito apreciado pelos pescadores e consumidores no Brasil. Ele é conhecido por sua carne saborosa e textura firme, sendo uma escolha popular em muitos pratos de peixe. O Pintado pode ser encontrado em rios e lagos e é conhecido por suas manchas características em todo o corpo.

                            Este peixe é uma excelente fonte de proteína e contém várias vitaminas e minerais essenciais, como ferro e potássio. A pesca do Pintado é popular devido ao tamanho que ele pode atingir e pela luta que oferece quando fisgado.

                            Aqui estão algumas dicas para ajudá-lo a ter sucesso na pesca do Pintado:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas naturais como pequenos peixes, minhocas ou pedaços de carne. 🪱</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em áreas profundas e com correnteza, onde os Pintados costumam se alimentar. 🌊</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos resistentes, pois o Pintado pode ser um peixe grande e forte. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja paciente e preparado para uma luta, pois o Pintado é conhecido por sua força e resistência. 💪</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Experimente pescar à noite, quando os Pintados são mais ativos e estão em busca de alimento. 🌙</Text>
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
