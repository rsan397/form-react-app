import React, { useState } from 'react';

function SpinBox ({type, parentCallback}){
    const [amount, setAmount] = useState(0);
    const handleChange = (e) => {
        parentCallback(type, Number(e.target.value));
        setAmount(e.target.value);
    }

    return (
        <input value={amount} type="number" step="1"
        className="form-control" id={`amountInput-${type}`}
        onChange={handleChange} min={0} />
    );
}

export default SpinBox;