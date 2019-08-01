/**
 * This module conatins the HTML for the Main Content. This is a redux component.
 */
import React  from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { ThanosCaptionConatiner } from '../../../platform/thanosCaption/thanosCaptionConatinerComponent.js';
import HitButtonContainer from "../../../platform/thanosHitButton/hitButtonContainerComponent.js";

const styles = StyleSheet.create({
    hitButtonWrapper: {
        width: '80%',
    },
    articleTitle: {
        fontSize: 15,
        paddingBottom: 20,
        paddingTop: 50,
        color: '#f5deb3',
        textAlign: 'center'
    },
    hitCount: {
        fontSize: 15,
        paddingTop: 20,
        color: '#f5deb3',
        textAlign: 'center'
    }
});

class MainComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View>
                <ThanosCaptionConatiner></ThanosCaptionConatiner>
                <View style={styles.hitButtonWrapper}>
                    <Text style={styles.articleTitle}>Then what are you waiting for? Go ahead and hit him</Text>
                    <HitButtonContainer></HitButtonContainer>
                    <Text style={styles.hitCount}>{`You hit him ${this.props.count} times`}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = function(state){
    return {
        count: state.hitButtonReducer.count
}};

const mapDispatchToProps = (dispatch) => {
    return {
    increaseHitCount: count => {
        dispatch(setPlpProducts(count));
    }
}};

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);