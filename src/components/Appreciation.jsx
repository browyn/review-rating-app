import React from 'react';

import iconThankYou from "../assets/images/illustration-thank-you.svg";

const Appreciation = ({ select }) => {

    return (
        <>
            <div className="card-appreciation" data-aos="fade-in">
                <img src={iconThankYou} alt="Thank you illustration" />
                <span>You selected {select} out of 5</span>
                <h1>Thank You!</h1>
                <p>
                    We appreciate you taking the time to give a rating.
                    If you ever need support, don't hesitate to get in touch!
                </p>
            </div>
        </>
    );
};

export default Appreciation;