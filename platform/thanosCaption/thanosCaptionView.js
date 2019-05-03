import React  from 'react';

export const ThanosCaptionView = props => {
    return (
        <div className="image-wrapper">
            <p>{props.data}</p>
            <img src="https://www.sideshow.com/product-asset/903429/feature" className="thanos-image"></img>
        </div>
    )
}