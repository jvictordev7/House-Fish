import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Estilos from '../../Estilos'

export default function Traira() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/traira2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={Estilos.TxtG}>Traira</Text>
                        <Text style={styles.text}>
                            A Traíra é um peixe de água doce encontrado em várias regiões do Brasil, especialmente em lagos e rios de água parada ou de correnteza lenta. Conhecida por sua agressividade e por ser um predador voraz, a Traíra é muito apreciada tanto pela pesca esportiva quanto pela culinária.

                            A Traíra possui dentes afiados e é conhecida por sua luta intensa quando fisgada, tornando a pesca desse peixe uma experiência desafiadora e emocionante.

                            Aqui estão algumas dicas para ajudá-lo a pescar Traíra com sucesso:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas artificiais que imitam pequenos peixes ou rãs, que são presas naturais da Traíra. 🐟</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em áreas com vegetação aquática densa, onde a Traíra costuma se esconder e emboscar suas presas. 🌿</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos fortes e linhas de resistência adequada, pois a Traíra tem uma mordida potente e pode danificar o equipamento. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja rápido ao fisgar, pois a Traíra pode cuspir a isca se perceber que não é uma presa verdadeira. 👀</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque durante o início da manhã ou ao entardecer, quando a Traíra é mais ativa na busca por alimento. ⏰</Text>
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
