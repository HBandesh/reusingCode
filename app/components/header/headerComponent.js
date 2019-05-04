import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    header: {
        padding:'5%',
    },
    pageHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f5deb3',
        textAlign: 'center'
    }
});

export default Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.pageHeading}>
                WANT TO HIT THANOS?
            </Text>
        </View>
    )
};