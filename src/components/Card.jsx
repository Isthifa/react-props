import React from "react";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="avatar_img" />
      <p>{props.email}</p>
      <p>{props.tel}</p>
    </div>
  );
}

export default Card;