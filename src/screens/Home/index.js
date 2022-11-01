
import React from 'react';
import { ScrollView, View } from 'react-native';

import Banner from './Banner';
import Product_impotant from './Product_impotant';

const Home = () =>
{
    return (
        <ScrollView>
            <Banner />
            <View>
                <Product_impotant />
            </View>
        </ScrollView>
    );
}
export default Home;