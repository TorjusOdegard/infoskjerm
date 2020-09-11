import createEnturService from "@entur/sdk";
import React, { useEffect, useState } from "react";

const service = createEnturService({
  clientName: "torjus-infoskjerm",
});

const Scooter = (props) => {
  const { operator, battery } = props.scooter;
  //Får også en lat og long, så kan finne et rammeverk som hjelper med beregning på meter
  return (
    <div>
      {operator} har ledig med {battery}% batteri
    </div>
  );
};

const Scooters = () => {
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    service
      .getScootersByPosition({
        latitude: 63.417149,
        longitude: 10.396673,
        distance: 200,
        operators: ["tier", "voi", "zvipp", "lime"],
      })
      .then((data) => setScooters(data));
  }, []);

  console.log(scooters);
  return (
    <div className="Scooters">
      <h3>Ledige sparkesykler</h3>
      {scooters.map((scooter) => (
        <Scooter scooter={scooter} />
      ))}
    </div>
  );
};

export default Scooters;
