import React  from 'react';
import { Button } from 'react-native';

export class HitButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Button title="Hit Thanos" onPress={this.props.increaseCount}></Button>
        )
    }
};