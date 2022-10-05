import React from "react";

import icon from "./assets/images/icon-star.svg";
import iconThankYou from "./assets/images/illustration-thank-you.svg";
import "./App.scss";

function App() {

  const [select, setSelect] = React.useState(0);
  const [submitMessage, setSubmitMessage] = React.useState(false);
  const ratings = [1, 2, 3, 4, 5];
  const submit = (e) => {
    e.preventDefault(0);
    return select === 0 ? alert('Please select a number') : setSubmitMessage(!false);
  };

  return (
    <main>
      <div className="card-container">
        <div className="card-body">
          {
            !submitMessage
            &&
            <div className="card-logo">
              <img src={icon} alt="Star Icon" />
            </div>
          }
          <div className="card-content">
            {
              !submitMessage
                ?
                <>
                  <h1>How did we do?</h1>
                  <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                  <div className="ratings">
                    {ratings.map((rating) => (
                      <span key={`option-${rating}`} onClick={(e) => {
                        e.preventDefault();
                        setSelect(rating);
                        console.log(rating);
                      }} className={select === rating ? "selected" : null}>{rating}</span>
                    ))}
                  </div>
                </>
                :
                <div className="card-appreciation">
                  <img src={iconThankYou} alt="Thank you illustration" />
                  <h1>Thank You!</h1>
                  <span>You selected {select} out of 5</span>
                  <p>We appreciate you taking the time to give a rating.
                    If you ever need support, don't hesitate to get in touch!</p>
                </div>
            }
            {!submitMessage && <button type="button" onClick={submit}>SUBMIT</button>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;