import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card_product from './Card_product';
import All_product from './All_product';

const Product_impotant = () =>
{
    return (
        <View>
            <Text style={styles.title_product_ip}>Diabetic Diet</Text>
            <View>
                <Card_product />
            </View>
            <Text style={styles.title_product_ip}>All product</Text>
            <ScrollView>
                <All_product />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title_product_ip: {
        fontSize: 30,
    },

})

export default Product_impotant;
