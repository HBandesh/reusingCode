import React  from 'react';
import { ThanosCaptionView } from './thanosCaptionView';

export const ThanosCaptionContainer = () => {
    const data = "Does this guy irritates you?"
    return(
        <ThanosCaptionView data={data}></ThanosCaptionView>
    )
}
