import React from "react";
import InventoryComponentStyled from "./InventoryComponentStyled";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

const InventoryComponent = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handlePrice = () => {
    if (showDetails) {
      setShowDetails(false);
    }
    setShowPrice(!showPrice);
  };

  return (
    <InventoryComponentStyled>
      <div className="car-name-image-div">
        <img src={props.img} />
        <div className="vehicle-name">
          <h1>
            {props.make} {props.model}
          </h1>
          <h3>{props.year}</h3>
        </div>
      </div>
      {showDetails ? (
        <div className="car-details-div">
          <h1>Vin: {props.vin}</h1>
          <h1>Classification: {props.classification}</h1>
          <h1>Cyl: {props.cylinders}</h1>
          <h1>Transmission: {props.transmission}</h1>
          <h1>Drivetrain: {props.driveTrain}</h1>
          <h1>Body: {props.bodyType}</h1>
          <h1>Color: {props.primaryColor}</h1>
          <h1>Fuel: {props.fuelType}</h1>
        </div>
      ) : showPrice ? (
        <div className="car-price-div">
          <h1>${props.Retail}</h1>
        </div>
      ) : null}
      <div className="car-stats-div">
        <Button onClick={handleDetails}>Show details</Button>
        <Button onClick={handlePrice}>Show Price</Button>
      </div>
    </InventoryComponentStyled>
  );
};

export default InventoryComponent;
