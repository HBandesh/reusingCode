import React  from 'react';
import { connect } from "react-redux";
import { ThanosCaptionConatiner } from '../../../platform/thanosCaption/thanosCaptionConatinerComponent';
import HitButtonContainer from "../../../platform/thanosHitButton/hitButtonContainerComponent";
import "./mainComponent.css"

class MainComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section className="main-section">
                <ThanosCaptionConatiner></ThanosCaptionConatiner>
                <article className="hit-button-wrapper">
                    <p className="article-title">Then what are you waiting for? Go ahead and hit him</p>
                    <HitButtonContainer></HitButtonContainer>
                    <p className="hit-count">{`You hit him ${this.props.count} times`}</p>
                </article>
            </section>
        )
    }
}

const mapStateToProps = function(state){
    return {
        count: state.hitButtonReducer.count
}};

export default connect(mapStateToProps,{})(MainComponent);