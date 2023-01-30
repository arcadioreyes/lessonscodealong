import React from "react";

function StrollCard(props) {
  const { stroll } = props;

  return (
    <div className="StrollCard">
      <h3>Title: {stroll.title}</h3>
      <br />
      <img src={stroll.image} alt="quartier" width={"200px"} />
      <p>Quartier: {stroll.quartier}</p>
      <p>Guide: {stroll.guide}</p>
      <p>Description: {stroll.description}</p>
      <p>Fee: {stroll.fee} €</p>
      <p>Availability: {stroll.availability}</p>
      <p>Rating: {stroll.rating}</p>
    </div>
  );
}

export default StrollCard;
