import React from 'react';

function BandDescription(props){
    return(
        <>
            <img src={props.imgUrl} alt="band-description" className="description-image"/>
            <div dangerouslySetInnerHTML={{__html: props.description}} className="description-text" />
        </>
    );
}

export default BandDescription;