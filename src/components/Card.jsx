import React from "react";
import Photo from "./Photo";
import Detail from "./Detail";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Photo img={props.url} />
      </div>
      <div className="bottom">
        <Detail data={props.phone} />
        <Detail data={props.email} />
        {/* <p className="info">{props.contact.phone}</p>
        <p className="info">{props.contact.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
