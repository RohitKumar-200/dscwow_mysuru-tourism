import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import "./Destinations.css";
import Loading from "../Loading/Loading";

function Destinations() {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    db.collection("destinations").onSnapshot((snapshot) => {
      setDestinations(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      {destinations ? (
        <div className="destinations">
          {destinations?.map((destination) => (
            <div className="destination__container">
              <div className="destination__containerTop">
                <div className="destination__imgContainer">
                  <img src={destination.img} alt={destination.name} />
                </div>
                <div className="destination__mapContainer">
                  <img
                    src={destination.mapImg}
                    alt={destination.name + "map"}
                  />
                </div>
              </div>
              <div className="destination__containerBottom">
                <div className="destination__contentContainer">
                  <h2 className="destination__heading">{destination.name}</h2>
                  <p className="destination__description">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Destinations;
