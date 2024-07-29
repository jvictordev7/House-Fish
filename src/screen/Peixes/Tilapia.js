import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

export default function Tilapia() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/tilapia2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            A Tilápia é um dos peixes mais populares e amplamente cultivados em todo o mundo. Originária da África, ela é conhecida por sua capacidade de adaptação a diferentes condições ambientais e por seu rápido crescimento. A Tilápia tem um sabor suave e textura firme, o que a torna uma escolha favorita para diversos pratos culinários.

                            Além de ser uma excelente fonte de proteína, a Tilápia é rica em vitaminas e minerais, como vitamina B12, fósforo e selênio. Sua criação em sistemas de aquicultura sustentável também contribui para a preservação dos estoques de peixes selvagens.

                            Pescar Tilápia pode ser uma experiência divertida e recompensadora. Aqui estão algumas dicas para ajudá-lo a ter sucesso na pesca da Tilápia:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas naturais como minhocas, pequenos insetos ou pedaços de vegetais. 🪱</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em águas rasas e próximas à vegetação aquática, onde as Tilápias gostam de se esconder. 🌿</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos leves, como varas e linhas finas, para sentir melhor a fisgada da Tilápia. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja paciente e fique atento aos movimentos sutis da linha, pois a Tilápia pode ser cautelosa ao morder a isca. 👀</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Experimente diferentes horários do dia, como início da manhã ou final da tarde, quando as Tilápias são mais ativas. ⏰</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

// Atualize o estilo no seu arquivo de estilos
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
