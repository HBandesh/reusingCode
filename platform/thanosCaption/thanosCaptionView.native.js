import React  from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginLeft: 70,
    }
})

export const ThanosCaptionView = () => {
    return (
        <View style={styles.wrapper}>
            <Image source={{uri:"https://www.sideshow.com/product-asset/903429/feature"}} style={styles.image}></Image>
        </View>
    )
}