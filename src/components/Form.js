import React, { useState, useRef } from "react";
import Card from "./Card";

function Form() {
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [focus, setFocus] = useState(false);

  const handleCardNum = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      const val = e.target.value;
      setCardNum(val);
    }
  };
  const handleKeyPress = e => {
    // if (e.keyCode == 8) {
    //   const val = "#";
    //   setCardNum(val);
    // }
    // console.log("Asdasd", e.keyCode);
  };
  const handleCardName = e => {
    setCardName(e.target.value);
  };
  const handleCardExpMonth = e => {
    setCardExpMonth(e.target.value);
  };
  const handleCardExpYear = e => {
    setCardExpYear(e.target.value);
  };
  const handleCvv = e => {
    setCardCvv(e.target.value);
  };

  //   console.log("ummm", cardNum);

  return (
    <>
      <div className="formContainer">
        <div className="formContainer--top">
          <Card
            name={cardName}
            num={cardNum}
            month={cardExpMonth}
            year={cardExpYear}
            cvv={cardCvv}
            focus={focus}
          >
            {" "}
          </Card>
        </div>
        <div className="formContainer--bottom">
          <form className="form">
            <div className="form--group">
              <div className="label"> Card Number</div>
              <input
                onKeyDown={handleKeyPress}
                value={cardNum}
                maxLength={16}
                onChange={handleCardNum}
              />
            </div>
            <div className="form--group">
              <div className="label">Card Name</div>
              <input value={cardName} onChange={handleCardName} />
            </div>
            <div className="card-details">
              <div className="expiration">
                <div className="form--group">
                  <div className="label">Expiration</div>
                  <input
                    value={cardExpMonth}
                    maxLength={2}
                    onChange={handleCardExpMonth}
                  />
                </div>
                <div className="form--group">
                  <div className="label"></div>
                  <input
                    value={cardExpYear}
                    maxLength={2}
                    onChange={handleCardExpYear}
                  />
                </div>
              </div>
              <div className="form--group">
                <div className="label">CVV</div>
                <input
                  value={cardCvv}
                  onBlur={() => setFocus(false)}
                  onFocus={() => setFocus(true)}
                  onChange={handleCvv}
                />
              </div>
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
