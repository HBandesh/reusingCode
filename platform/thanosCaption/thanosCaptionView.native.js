import React  from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    caption: {
        
    },
    image: {

    }
})

export const ThanosCaptionView = props => {
    return (
        <View>
            <Text style={styles.caption}>{props.data}</Text>
            <Image source={{uri:"https://www.sideshow.com/product-asset/903429/feature"}} style={styles.caption}></Image>
        </View>
    )
}