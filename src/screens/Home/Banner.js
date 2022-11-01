
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
const Banner = () =>
{
    return (
        <View>
            <View>
                <Text style={styles.titleTopBanner}>Fruit Store</Text>
            </View>
            <View>
                <Image style={styles.imageBig} source={require('../../../assets/images/hinh1.jpg')} />
                <View style={styles.textOnImage}>
                    <Text style={{ color: 'red', fontSize: 30 }}>Hi every {`\n`}
                        Welcome to Store.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleTopBanner: {
        fontSize: 30,
    },
    topBanner: {
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
    },

    imageBig: {
        backgroundColor: "black",
        opacity: 0.5,
        width: 361,
        height: 203,
        margin: 14
    },

    textOnImage: {
        position: 'absolute',
        top: 30,
        left: 40,
    },

    textOnImageTitle: {
        fontSize: 30,
        display: "flex",
        color: "#1987FB",
        fontWeight: "700",
    },

});

export default Banner;