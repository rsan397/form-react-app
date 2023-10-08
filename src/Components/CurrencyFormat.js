import React from 'react';

function CurrencyFormat({cost}){
    let dollarUs = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

    return <h2>{dollarUs.format(cost/100)}</h2>
}

export default CurrencyFormat;