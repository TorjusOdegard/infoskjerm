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
          latitude: 63.428311,
          longitude: 10.392514,
        },
        230
      )
      .then((data) => setBikesStations(data));
  }, []);

  return (
    <div className="Bikes">
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
      {name} - {bikesAvailable} : {spacesAvailable}
    </div>
  );
};
