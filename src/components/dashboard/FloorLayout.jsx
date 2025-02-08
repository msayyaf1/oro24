import React, { useState, useEffect } from "react";

const FloorLayout = ({
  floorNo,
  units = [],
  selectedUnits,
  setSelectedUnits,
}) => {
  const getUnitType = (apartmentType) => {
    const words = apartmentType.split(" ");
    return words.map((word) => word[0]).join("");
  };

  const toggleUnitSelection = (inventoryId) => {
    setSelectedUnits((prev) => {
      if (prev.includes(inventoryId)) {
        return prev.filter((id) => id !== inventoryId);
      } else {
        return [...prev, inventoryId];
      }
    });
  };

  return (
    <div className="p-6 bg-[#F3F6F9] rounded-lg h-full">
      <div className="flex items-center justify-between mb-6 ">
        <div className="flex items-center space-x-2 ">
          <input
            className="w-5 h-5"
            type="checkbox"
            id="check1"
            checked={true}
            onChange={() => {}}
          />{" "}
          <h1 className="text-2xl font-bold">Floor - {floorNo}</h1>
        </div>

        <div className="flex space-x-2 ">
          <div className="flex items-center space-x-2 ">
            <input
              className="m-2"
              type="checkbox"
              id="check2"
              checked={true}
              onChange={() => {}}
            />
            <div>Select all</div>
          </div>
          <div className="flex p-2 text-center w-44">
            <div className="border border-black p-2 flex-1 w-24">STUDIO</div>
            <div className="border border-black p-2 flex-1 w-24 bg-[#6EC0E2]">
              1BH
            </div>
            <div className="border border-black p-2 flex-1 w-24">2BH</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {units.slice(0, 18).map((unit) => {
          const typeAbbr = getUnitType(unit.ApartmentType);
          return (
            <button
              key={unit.InventoryID}
              onClick={() => toggleUnitSelection(unit.InventoryID)}
              className={`
                px-3 py-1 rounded-lg border-2 flex items-center justify-between w-[180px]
                ${
                  selectedUnits.includes(unit.InventoryID)
                    ? "bg-blue-100 border-blue-200"
                    : "bg-white border-gray-200"
                }
                hover:border-blue-300 transition-colors
              `}
            >
              <div className="text-base font-bold">{typeAbbr}</div>
              <div className="text-gray-600">{unit.UnitNo}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default FloorLayout;
