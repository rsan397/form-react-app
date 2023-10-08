import React, { useState, useEffect } from 'react';
import BandDescription from './BandDescription';
import BandHeader from './BandHeader';
import Ticket from './Ticket';
import Input from './Input';
import CurrencyFormat from './CurrencyFormat';

function BandForm({ band }) {
    var ticketAmountObj = {};
    band.ticketTypes.forEach((ticket) => ticketAmountObj[ticket.type] = 0);

    const [selectedTickets, setSelectedTickets] = useState(ticketAmountObj);

    const updateTicketAmount = (type, amount) => {
        setSelectedTickets((prev) => {
            var tickets = {...prev};
            tickets[type] = amount;
            return tickets;
        });
    };

    const [total, setTotal] = useState(0);

    useEffect (()=> {
        var sum = 0;
        band.ticketTypes.forEach((ticket) => {
            var amount = selectedTickets[ticket.type];
            sum = sum + (amount* (ticket.cost));
        });
        setTotal(sum);
    },[selectedTickets, total, band.ticketTypes]);

    const [details, setDetails] = useState({});

    const updateInputDetails = (inputField, value) => {
        setDetails((prev)=> {
            var existingDetails = {...prev};
            existingDetails[inputField] = value;
            return existingDetails;
        });
    };

    const handleClick = (event) => {
    /* data in details from updateInputDetails():
        {
          firstName: blah,
          lastName: blah,
          address: blah,
          ccNumber: blah,
          ccExpiration: blah,
          cvv: blah
        };
        data in selectedTickets from UpdateTicketAmount():
        {ticketType: amount, ticketType: amount};
        */
        console.log(selectedTickets);
        console.log(details);
    };


  return (
    <div className="band-form">
      {/*Header*/}
      <BandHeader name={band.name} date={band.date} location={band.location} />
      <div className="container">
        <div className="row align-items-start">
            <div className="col">
            {/*Left column*/}
                <BandDescription imgUrl={band.imgUrl} description={band.description_blurb} />
            </div>
            {/*Right column*/}
            <div className="col">
                  <form className="select-tickets">
                    <h2>Select Tickets</h2>
                        {/*map 3 tickets to ticket*/}
                        {band.ticketTypes.map((ticket) => (
                          <Ticket name={ticket.name} description={ticket.description}
                          key={ticket.type} cost={ticket.cost} type={ticket.type}
                          parentCallback={updateTicketAmount} />
                        ))}
                      {/*Total ticket tally*/}
                      <div>
                      <div className="row">
                        <div className="form-group col-md-8">
                            <h2 className="grey-text">TOTAL</h2>
                        </div>
                        <div className="form-group col-md-4 text-align-right">
                            <CurrencyFormat cost={total} />
                        </div>
                      </div>
                      </div>
                      {/*Personal Info*/}
                      <div className="row">
                        <div className="form-group col-md-6">
                            <Input name="firstName" placeholder="First Name" parentCallback={updateInputDetails} />
                        </div>
                        <div className="form-group col-md-6">
                            <Input name="lastName" placeholder="Last Name" parentCallback={updateInputDetails} />
                        </div>
                      </div>
                       <div className="form-group">
                            <Input name="address" placeholder="Address" parentCallback={updateInputDetails} />
                       </div>
                      {/*Payment Details*/}
                      <h4 className="margin-top-medium">Payment Details</h4>
                      <div className="form-group">
                        <Input name="ccNumber" placeholder="0000 0000 0000 0000" parentCallback={updateInputDetails} />
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                            <Input name="ccExpiration" placeholder="MM/YY" parentCallback={updateInputDetails}/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name="cvv" placeholder="CVV" parentCallback={updateInputDetails}/>
                        </div>
                      </div>
                      {/*Submit Form*/}
                      <div>
                        <button type="button" className="btn btn-lg btn-secondary btn-block ticket-button" onClick={handleClick}>
                        Get Tickets</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
    </div>
  );
}

export default BandForm;