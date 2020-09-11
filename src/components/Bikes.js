import React, { useEffect, useState } from "react";
import createEnturService from "@entur/sdk";

const service = createEnturService({
  clientName: "torjus-infoskjerm",
});

const Bikes = () => {
  const [bikeStations, setBikesStations] = useState([]);

  useEffect(() => {
    service
      .getBikeRentalStationsByPosition(
        {
          latitude: 63.417149,
          longitude: 10.396673,
        },
        300
      )
      .then((data) => setBikesStations(data));
  }, []);

  return (
    <div className="Bikes">
      <h3>Oversikt over bysykler</h3>
      {bikeStations.map((station) => (
        <Station station={station} />
      ))}
    </div>
  );
};

export default Bikes;

const Station = (props) => {
  const { name, bikesAvailable, spacesAvailable } = props.station;
  return (
    <div>
      {name}: Ledige sykkler [{bikesAvailable}] og ledige plasser [
      {spacesAvailable}]
    </div>
  );
};
