import React from 'react';
import SpinBox from './SpinBox';
import CurrencyFormat from './CurrencyFormat';

function Ticket(props){
    return (
        <div id={props.type} className="margin-top-medium">
            <h3 className="grey-text">{props.name.toUpperCase()}</h3>
            <p className="ticket-description description-text">{props.description}</p>
            <div className="row">
                <div className="col-md-10 grey-text">
                    <CurrencyFormat cost={props.cost} />
                </div>
                <div className="col-md-2">
                    <SpinBox type={props.type} parentCallback={props.parentCallback}/>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Ticket;