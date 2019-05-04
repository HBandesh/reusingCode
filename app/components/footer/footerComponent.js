import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        padding:'5%',
    },
    footerHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f5deb3',
        textAlign: 'center'
    }
});

export const Footer = () => {
    return(
        <View style={styles.footer}>
            <Text style={styles.footerHeading}>
                I hope I was able to explain the concept. Now go and watch Avengers Endgame.
            </Text>
        </View>
    )
};