import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Estilos from '../../Estilos'

export default function Piau() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background2.png')} // Imagem de fundo
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/piau2.png')} style={styles.image} />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <Text style={Estilos.TxtG}>Piau</Text>
                        <Text style={styles.text}>
                            O Piau é um peixe de água doce muito comum nos rios e lagos do Brasil. Ele é conhecido por sua capacidade de adaptação a diferentes ambientes aquáticos e por sua carne saborosa e nutritiva. O Piau é frequentemente encontrado em cardumes e pode ser identificado por suas escamas prateadas e corpo alongado.

                            Este peixe é uma boa fonte de proteína e também contém vitaminas e minerais essenciais, como fósforo e potássio. A pesca do Piau é popular entre os pescadores esportivos e amadores, pois ele oferece uma boa luta quando fisgado.

                            Aqui estão algumas dicas para ajudá-lo a ter sucesso na pesca do Piau:
                        </Text>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Utilize iscas naturais como pequenos peixes, minhocas ou massas de pão. 🪱</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Pesque em águas calmas e próximas à vegetação, onde os Piaus costumam se alimentar. 🌿</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Use equipamentos leves e linhas finas para uma pesca mais eficiente. 🎣</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Seja paciente e observador, pois o Piau pode ser cauteloso ao morder a isca. 👀</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listItem}>Experimente pescar no início da manhã ou no final da tarde, quando os Piaus estão mais ativos. ⏰</Text>
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
