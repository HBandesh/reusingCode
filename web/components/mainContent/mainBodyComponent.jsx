import React  from 'react';
import { ThanosCaptionConatiner } from '../../../platform/thanosCaption/thanosCaptionConatinerComponent';

export class MainComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section>
                <ThanosCaptionConatiner></ThanosCaptionConatiner>
            </section>
        )
    }
}