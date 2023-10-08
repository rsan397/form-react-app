import React from 'react';

function Input(props){
    const handleChange = (event) => {
        props.parentCallback(props.name, event.target.value);
    };

    return (
        <input type="text" className="form-control margin-top-medium" aria-label="Default"
        id={`input-${props.name}`} name={props.name} placeholder={props.placeholder}
        onChange={handleChange} />
    );
}

export default Input;