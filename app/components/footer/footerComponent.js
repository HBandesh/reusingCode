/**
 * This module conatins the HTML for footer.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Styles for the component
const styles = StyleSheet.create({
    footer: {
        paddingTop: 40,
        paddingBottom: 80
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