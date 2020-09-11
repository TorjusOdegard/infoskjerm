import React, { useEffect, useState } from "react";
import { getDistance } from "geolib";
import createEnturService from "@entur/sdk";

const service = createEnturService({
  clientName: "torjus-infoskjerm",
});

const Station = (props) => {
  const {
    name,
    bikesAvailable,
    spacesAvailable,
    latitude,
    longitude,
  } = props.station;

  const distance = getDistance(
    {
      latitude: 63.417149,
      longitude: 10.396673,
    },
    {
      latitude,
      longitude,
    }
  );
  return (
    <div>
      <p>
        {name} ({distance} meter):
      </p>
      <p>Ledige sykler [{bikesAvailable}]</p>
      <p>Ledige plasser [{spacesAvailable}]</p>
    </div>
  );
};

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
      <h3>Bysykler</h3>
      {bikeStations.map((station) => (
        <Station station={station} />
      ))}
    </div>
  );
};

export default Bikes;
