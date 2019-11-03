import React, { useRef, useEffect, useState } from "react";
const CNUM = {
  0: "#",
  1: "#",
  2: "#",
  3: "#",
  4: "#",
  5: "#",
  6: "#",
  7: "#",
  8: "#",
  9: "#",
  10: "#"
};
const CCNUM = [
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#"
];
function Card(props) {
  console.log("props", props);
  const { num } = props;
  const ccnum = num.split("");
  const ref = useRef();
  const temp = useRef(CCNUM);

  const getVendor = () => {
    if (ccnum[0] === "3") {
      return "amex";
    } else if (ccnum[0] === "5") {
      return "mastercard";
    } else {
      return "visa";
    }
  };

  const displayBatchOne = () => {
    const CC = [...CCNUM];
    return temp.current.map((el, i) => {
      return <span key={i}>{el}</span>;
    });
    //   if(ccnum.length>0 && ccnum[0]!==""){
    //       return ccnum.map((el,i)=>{
    //           return <span>{CC[i]=l}</span>;
    //       })
    //   }
  };
  console.log("effect", ccnum);
  if (ccnum.length > 0 && ccnum[0] !== "") {
    ccnum.map((el, i) => {
      temp.current[i] = el;
    });
  }

  console.log("sad", ccnum);
  return (
    <>
      <div className="card-container">
        <div ref={ref} className={props.focus ? "card flip" : "card"}>
          <div className="card-front">
            <div className="card--header">
              <img src="./chip.png" />

              <img src={`./${getVendor()}.png`} className="vendor-img" />
            </div>
            <div className="card--number">
              {ccnum.length > 0 && ccnum[0] !== "" ? (
                displayBatchOne()
              ) : (
                <>
                  <span className="card--number-digit"># # # #</span>
                  <span className="card--number-digit"># # # #</span>
                  <span className="card--number-digit"># # # #</span>
                  <span className="card--number-digit"># # # #</span>
                </>
              )}
            </div>
            <div className="card--footer">
              <div className="card--footer-name">
                <div className="card--footer-label">Card Holder</div>
                <div className="name">
                  {props.name.toUpperCase() || "FULL NAME"}
                </div>
              </div>
              <div className="card--footer-date">
                <div className="card--footer-label">Expires</div>
                <div className="date">
                  {props.month || "MM"} / {props.year || "YY"}
                </div>
              </div>
            </div>
          </div>
          <div className="card-back">
            <div className="black-strip"> </div>
            <div className="white-strip-cont">
              <div style={{ color: "white" }}>CVV</div>
              <div className="white-strip">{props.cvv}</div>
            </div>
            <img src={`./${getVendor()}.png`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
