import React  from 'react';
import { HitButton } from './hitButtonView';
import { connect } from "react-redux";
import { setPlpProducts } from "../../actions/ThanosHitButton/hitButtonActions";

class HitButtonContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * @function increaseCount This fuction increases the count of the number of times
     *                          Thanos is hit when user clicks on button.
     */

    increaseCount = () => {
        this.props.increaseHitCount(1);
    }

    render () {
        return(
            <HitButton increaseCount={this.increaseCount}></HitButton>
        )
    }
}

const mapStateToProps = state => ({
    count: state.hitButtonReducer.count
});

const mapDispatchToProps = (dispatch) => {
    return {
    increaseHitCount: count => {
        dispatch(setPlpProducts(count));
    }
}};
  
export default connect(mapStateToProps,mapDispatchToProps)(HitButtonContainer);