import React from 'react';

function BandHeader(props){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateObj  = new Date(props.date);
    return (
        <div className="band-header">
            <h1 className="band-name-header">{props.name}</h1>
            <p className="description-text">{dateObj.toLocaleDateString("en-US", options)}</p>
            <p className="description-text">{props.location}</p>
        </div>
    );
}

export default BandHeader;