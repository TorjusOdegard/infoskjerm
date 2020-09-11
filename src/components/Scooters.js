import createEnturService from "@entur/sdk";
import { getDistance } from "geolib";
import React, { useEffect, useState } from "react";

const service = createEnturService({
  clientName: "torjus-infoskjerm",
});

const Scooter = (props) => {
  const { operator, battery, lat, lon } = props.scooter;
  const distance = getDistance(
    { latitude: 63.417149, longitude: 10.396673 },
    { lat, lon }
  );
  return (
    <div>
      <p>
        {operator} med {battery}% batteri:
      </p>
      <p>{distance} meter</p>
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
        distance: 300,
        operators: ["tier", "voi", "zvipp", "lime"],
      })
      .then((data) => setScooters(data));
  }, []);
  return (
    <div className="Scooters">
      <h3>Elsparkesykler ({scooters.length})</h3>
      {scooters.map((scooter) => (
        <Scooter scooter={scooter} />
      ))}
    </div>
  );
};

export default Scooters;
