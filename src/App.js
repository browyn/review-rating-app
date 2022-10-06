import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import icon from "./assets/images/icon-star.svg";
import "./App.scss";
import Appreciation from "./components/Appreciation";
import RatingForm from "./components/RatingForm";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [])

  const [select, setSelect] = React.useState(0);
  const [submitMessage, setSubmitMessage] = React.useState(false);

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
                <RatingForm select={select} setSelect={setSelect} setSubmitMessage={setSubmitMessage} />
                :
                <Appreciation select={select} />
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;