import React from "react";
import InventoryData from "./InventoryData";
import InventoryComponent from "./InventoryComponent";
const Inventory = () => {
  return (
    <div>
      {InventoryData.vehicles.map((item) => {
        return (
          <div>
            <InventoryComponent
              img={item.img}
              make={item.Make}
              model={item.Model}
              year={item.Year}
              price={item.Retail}
              vin={item.Vin}
              classification={item.Classification}
              cylinders={item.Cylinders}
              transmission={item.Transmission}
              driveTrain={item.Drivetrain}
              bodyType={item.BodyType}
              primaryColor={item.PrimaryColor}
              fuelType={item.FuelType}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Inventory;
